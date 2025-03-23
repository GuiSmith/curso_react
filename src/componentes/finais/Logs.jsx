import Listagem from './utilitarios/Listagem';
import { useState } from 'react';

const Logs = () => {

    const endpoint = 'log.php';

    const titulo = 'Logs';

    const [colunas, setColunas] = useState([]);

    const botoes = [
        {
            texto: 'Exportar',
            classe: 'btn-dark',
            acao: () => console.log('Exportar')
        }
    ];

    return (
        <section className='container-fluid'>
            <Listagem
                titulo={titulo}
                endpoint={endpoint}
                colunas={colunas}
                setColunas={setColunas}
                botoes={botoes}
            />
        </section>
    )
}

export default Logs;