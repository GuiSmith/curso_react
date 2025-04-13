import Registro from "@componentes/intermediarios/Registro";

import queryString from 'query-string';

const ItemComanda = () => {
    
    const titulo = 'Item de comanda';

    const endpoint = 'itemcomanda.php';

    const params = queryString.parse(window.location.search);

    const campos = {
        id: {
            tipo: 'number',
            disabled: true,
        },
        // id_item: {
        //     tipo: 'number',
        //     // placeholder: 'Digite o id do item aqui',
        //     disabled: true,
        //     // hidden: true,
        // },
        id_item: {
            tipo: 'select',
            endpoint: 'item.php',
            placeholder: 'Selecione o item aqui',
            optionLabel: 'descricao',
            label: 'Item',
        },
        id_comanda: {
            tipo: 'hidden',
            // disabled: true,
            value: params.id_comanda ?? '',
            // hidden: true,
        },
        quantidade: {
            tipo: 'number',
            placeholder: 'Digite a quantidade aqui',
        },
        status: {
            tipo: 'radio',
            options: ['CADASTRADO', 'CONFIRMADO', 'PRONTO', 'ENTREGUE'],
        },
        data_hora_cadastro: {
            tipo: 'datetime-local',
            disabled: true,
        },
        descontos: {
            tipo: 'text',
            step: '0.01',
        },
        isento: {
            tipo: 'checkbox',
            defaultValue: false,
        },
        valor_unitario: {
            tipo: 'number',
            step: '0.01',
            placeholder: 'Digite o valor unitário aqui',
        },
        valor_total: {
            tipo: 'number',
            disabled: true,
        },
    };

    return (
        <Registro
            titulo={titulo}
            campos={campos}
            endpoint={endpoint}
        />
    );
};

export default ItemComanda;
