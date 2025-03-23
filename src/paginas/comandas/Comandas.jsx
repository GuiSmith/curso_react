import Listagem from '@componentes/intermediarios/Listagem';
import { useState } from 'react';

const Comandas = (condicoes = {}) => {
    
    const endpoint = 'comanda.php';

    const titulo = 'Comandas';

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

export default Comandas;