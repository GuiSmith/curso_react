import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useState, useEffect } from 'react';

import { chaveParaTexto, capitalizarTexto } from "./Funcoes";

const Tabela = ({ colunas, objetos, total, paginaRegistro='' }) => {

    // Formatação de dados

    const [ordenacao, setOrdenacao] = useState({ coluna: null, ordem: 'asc' });
    const [objetosOrdenados, setObjetosOrdenados] = useState([]);

    const tableClasses = ['table', 'table-striped', 'table-bordered'];

    useEffect(() => {
        let novaLista = [...objetos];

        if (ordenacao.coluna) {
            novaLista.sort((a, b) => {
                let valorA = a[ordenacao.coluna];
                let valorB = b[ordenacao.coluna];

                // Tratamento para strings (case-insensitive)
                if (typeof valorA === 'string') valorA = valorA.toLowerCase();
                if (typeof valorB === 'string') valorB = valorB.toLowerCase();

                if (valorA < valorB) return ordenacao.ordem === 'asc' ? -1 : 1;
                if (valorA > valorB) return ordenacao.ordem === 'asc' ? 1 : -1;
                return 0;
            });
        }

        setObjetosOrdenados(novaLista);
    }, [ordenacao, objetos]);

    const formatarCampo = (chave, valor) => {
        // console.log(chave,valor);
        // Data
        if (chave.includes('data') && valor) {
            return format(valor, "dd/MM/yyyy HH:mm:ss", { locale: ptBR });
        }

        // Boolean
        if (typeof (valor) === 'boolean') {
            return valor ? 'Sim' : 'Não';
        }

        // Nome
        if (typeof (chave) === 'string') {
            return capitalizarTexto(valor);
        }

        return valor;
    };

    const handleRowClick = (id) => {
        if(paginaRegistro){
            window.location.href = `${paginaRegistro}?id=${id}`;
        }   
    };

    return (
        <div className='table-responsive'>
            <table className={tableClasses.join(' ')}>
                <thead>
                    <tr>
                        <td colSpan='2'>Total: {total}</td>
                        <td colSpan='4'>
                            Ordenação: {
                                ordenacao.coluna === null ? 'Nenhuma' : `${chaveParaTexto(ordenacao.coluna)} ${ordenacao.ordem == 'asc' ? 'Crescente' : 'Decrescente'}`
                            }
                        </td>
                    </tr>
                    <tr>
                        {colunas.map((coluna) => (
                            <th
                                className='text-nowrap'
                                key={coluna}
                                onClick={() => {
                                    setOrdenacao(prev => ({
                                        coluna: coluna,
                                        ordem: prev.coluna === coluna && prev.ordem === 'asc' ? 'desc' : 'asc'
                                    }));
                                }}
                            >
                                {chaveParaTexto(coluna)}
                                <span className={`ms-2 ordenar-icon ${ordenacao.coluna === coluna ? ordenacao.ordem : ''}`}></span>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {objetosOrdenados.map((objeto, index) => (
                        <tr key={index} onClick = {() => handleRowClick(objeto.id)} className='table-row'>
                            {colunas.map((coluna) => (
                                <td key={coluna}>
                                    {/* {objeto[coluna]} */}
                                    {formatarCampo(coluna, objeto[coluna])}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Tabela;