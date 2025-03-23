import Listagem from '@componentes/intermediarios/Listagem';
import { useState, useEffect } from 'react';

const ItemComandas = ({ condicoes = {}}) => {
    
    const endpoint = 'itemcomanda.php';

    const titulo = 'Item de comandas';

    const paginaRegistro = '/itemcomandas/registro';

    const [colunas, setColunas] = useState();

    const botoes = [
        {
            texto: 'Novo',
            classe: 'btn-primary',
            to: condicoes.id_comanda ? `${paginaRegistro}?id_comanda=${condicoes.id_comanda}` : paginaRegistro,
        },
    ];

    return (
        <section className="container-fluid">
            <Listagem
                titulo={titulo}
                endpoint={endpoint}
                colunas={colunas}
                setColunas={setColunas}
                condicoes={condicoes}
                paginaRegistro={paginaRegistro}
                botoes={botoes}
            />
        </section>
    )
}

export default ItemComandas;