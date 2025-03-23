import Listagem from "@componentes/intermediarios/Listagem";
import { useState } from "react";

const Itens = ({ condicoes = {} }) => {
    
    const endpoint = 'item.php';

    const titulo = 'Itens';

    const paginaRegistro = '/itens/registro';

    const [colunas, setColunas] = useState();

    const botoes = [
        {
            texto: 'Novo',
            classe: 'btn-primary',
            to: paginaRegistro,
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
};

export default Itens;