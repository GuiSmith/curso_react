import Listagem from "../utilitarios/Listagem";
import { useState } from "react";

const Itens = () => {
    
    const endpoint = 'item.php';

    const titulo = 'Itens';

    const [colunas, setColunas] = useState();

    return (
        <section className="container-fluid">
            <Listagem
                titulo={titulo}
                endpoint={endpoint}
                colunas={colunas}
                setColunas={setColunas}
            />
        </section>
    )
};

export default Itens;