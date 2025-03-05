import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { chaveParaTexto, capitalizarTexto } from "./Funcoes";
import Botoes from './Botoes';

const Tabela = ({ titulo, colunas, objetos, botoes }) => {

    const tableClasses = ['table', 'table-striped', 'table-bordered'];

    const formatarCampo = (chave, valor) => {
        // console.log(chave,valor);
        // Data
        if(chave.includes('data')){
            return format(valor,"dd/MM/yyyy HH:mm:ss", {locale: ptBR});
        }
    
        // Boolean
        if(typeof(valor) === 'boolean'){
            return valor ? 'Sim' : 'Não';
        }
    
        // Nome
        if(chave.includes('nome')){
            return capitalizarTexto(valor);
        }
    
        return valor;
    }

    return (
        <article>
            <h2 className='text-center'>{titulo}</h2>
            {<Botoes botoes={botoes} />}
            <div className='table-responsive'>
                <table className={tableClasses.join(' ')}>
                    <thead>
                        <tr>
                            <td colSpan={colunas.length} className="float-right">Total: {objetos.length}</td>
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
            </div>
        </article>
    )
}

export default Tabela;