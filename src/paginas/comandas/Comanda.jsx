import Registro from "@componentes/intermediarios/Registro";
import ItemComandas from '@paginas/itemcomandas/ItemComandas';

import queryString from "query-string";

const Comanda = () => {

    const titulo = 'Comanda';

    const endpoint = 'comanda.php';

    const campos = {
        id: {
            tipo: 'number',
            disabled: true,
        },
        data_hora_abertura: {
            tipo: 'datetime-local',
            disabled: true,
        },
        data_hora_fechamento: {
            tipo: 'datetime-local',
            disabled: true,
        },
        status: {
            tipo: 'radio',
            options: ['ABERTA', 'FECHADA'],
        },
        valor_total: {
            tipo: 'number',
            step: '0.01',
            disabled: true,
        },
        valor_recebido: {
            tipo: 'number',
            step: '0.01',
            disabled: true,
        },
        descontos: {
            tipo: 'number',
            step: '0.01',
        },
    };

    const params = queryString.parse(window.location.search);
    const condicoes = {
        id_comanda: params.id ?? 0,
    };
    console.log(condicoes);
    // const condicoes = params.id ? { id_comanda: params.id } : {};
    return (
        <div>
            <Registro
                titulo={titulo}
                campos={campos}
                endpoint={endpoint}
            />
            <ItemComandas condicoes={condicoes} />
        </div>
    )
}

export default Comanda;