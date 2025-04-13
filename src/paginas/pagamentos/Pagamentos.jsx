import Listagem from "@componentes/intermediarios/Listagem";
import { useState } from "react";

const Pagamentos = ({condicoes = {}}) => {

    const endpoint = 'pagamento.php';

    const titulo = 'Pagamentos';

    const paginaRegistro = '/pagamentos/registro';

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
    );
};

export default Pagamentos;