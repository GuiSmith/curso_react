import Listagem from '@componentes/intermediarios/Listagem';
import { useState } from 'react';

const ItemComandas = ({ condicoes = {}}) => {
    
    const endpoint = 'itemcomanda.php';

    const titulo = 'Item de comandas';

    const [colunas, setColunas] = useState();

    return (
        <section className="container-fluid">
            <Listagem
                titulo={titulo}
                endpoint={endpoint}
                colunas={colunas}
                setColunas={setColunas}
                condicoes={condicoes}
            />
        </section>
    )
}

export default ItemComandas;