import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useState, useEffect } from 'react';

import { chaveParaTexto, capitalizarTexto } from "./Funcoes";
import Botoes from './Botoes';
import { api_limit } from './API';

const Tabela = ({ titulo, colunas, objetos, botoes, total, offset, setOffset }) => {

    const tableClasses = ['table', 'table-striped', 'table-bordered'];

    const formatarCampo = (chave, valor) => {
        // console.log(chave,valor);
        // Data
        if (chave.includes('data')) {
            return format(valor, "dd/MM/yyyy HH:mm:ss", { locale: ptBR });
        }

        // Boolean
        if (typeof (valor) === 'boolean') {
            return valor ? 'Sim' : 'Não';
        }

        // Nome
        if (chave.includes('nome')) {
            return capitalizarTexto(valor);
        }

        return valor;
    }

    const paginas = Math.ceil(total / api_limit);

    const [pagina, setPagina] = useState(1);

    const handleProximaPagina = (proxPagina) => {
        setPagina(proxPagina);
    }

    useEffect(() => {
        setPagina(1);
    }, []);

    useEffect(() => {
        console.log(pagina);
    }, [pagina]);

    const paginacao = (paginas) => {
        const links = [];
        for (let index = 1; index <= paginas; index++) {
            links.push(
                <li key={`pagina-${index}`} className='page-item'>
                    <a
                        href="#"
                        className='page-link'
                        onClick={() => handleProximaPagina(index)}
                    >
                        {index}
                    </a>
                </li>
            );
        }

        return (
            <nav>
                <ul className='pagination justify-content-center'>
                    <li key='pagina-anterior' className='page-item'>
                        <a
                            href="#"
                            className='page-link'
                            onClick={() => handleProximaPagina(pagina - 1)}
                            disabled = {pagina == 1 ? true : false}>
                            Anterior
                        </a>
                    </li>
                    {links.map((link) => link)}
                    <li key='proxima-pagina' className='page-item'>
                        <a href="#" className='page-link' onClick={() => handleProximaPagina(pagina + 1)}>Próximo</a>
                    </li>
                </ul>
            </nav>
        )
    };

    return (
        <article>
            <h2 className='text-center'>{titulo}</h2>
            {<Botoes classes='mb-3' botoes={botoes} />}
            <div className='table-responsive'>
                <table className={tableClasses.join(' ')}>
                    <thead>
                        <tr>
                            <td colSpan={colunas.length}>Total: {total}</td>
                        </tr>
                        <tr>
                            {colunas.map((coluna) => (
                                <th className='text-nowrap' key={coluna}>{chaveParaTexto(coluna)}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {objetos.map((objeto, index) => (
                            <tr key={index}>
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
                {paginacao(paginas)}
            </div>
        </article>
    )
}

export default Tabela;