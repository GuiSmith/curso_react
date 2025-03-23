import { useState } from 'react';


import Listagem from '@componentes/intermediarios/Listagem';

const Comandas = (condicoes = {}) => {

    const endpoint = 'comanda.php';

    const titulo = 'Comandas';

    const paginaRegistro = '/comandas/registro';

    const [colunas, setColunas] = useState();

    const botoes = [
        {
            texto: 'Nova',
            to: paginaRegistro,
            classe: 'btn-primary'
        }
    ];

    return (
        <section className="container-fluid">
            <Listagem
                titulo={titulo}
                endpoint={endpoint}
                colunas={colunas}
                setColunas={setColunas}
                condicoes={condicoes}
                botoes={botoes}
                paginaRegistro={paginaRegistro}
            />
        </section>
    )
}

export default Comandas;