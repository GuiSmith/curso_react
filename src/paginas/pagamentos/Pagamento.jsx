import Registro from "@componentes/intermediarios/Registro";

import queryString from 'query-string';

const Pagamento = () => {
    
    const titulo = 'Pagamento';

    const endpoint = 'pagamento.php';

    const params = queryString.parse(window.location.search);

    const campos = {
        id: {
            tipo: 'number',
            disabled: true,
        },
        id_comanda: {
            tipo: 'hidden',
            value: params.id_comanda ?? '',
        },
        forma_pagamento: {
            tipo: 'radio',
            options: ['pix','debito','credito','boleto','transferencia','cheque'],
        },
        valor: {
            tipo: 'number',
            placeholder: 'Digite o valor aqui'
        },
        data_hora_cadastro: {
            tipo: 'datetime-local',
            disabled: true
        },
    };

    return (
        <Registro
            titulo={titulo}
            campos={campos}
            endpoint={endpoint}
        />
    );
}

export default Pagamento;