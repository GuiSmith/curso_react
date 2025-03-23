import Registro from "@componentes/intermediarios/Registro";

const ItemComanda = ({id_comanda = null}) => {
    
    const titulo = 'Item de comanda';

    const endpoint = 'itemcomanda.php';

    const campos = {
        id: {
            tipo: 'number',
            disabled: true,
        },
        id_item: {
            tipo: 'number',
        },
        id_comanda: {
            tipo: 'number',
            disabled: true,
            value: id_comanda,
            hidden: true
        },
        quantidade: {
            tipo: 'number',
            placeholder: 'Digite a quantidade aqui',
        },
        status: {
            tipo: 'radio',
            options: ['CADASTRADO', 'CONFIRMADO','PRONTO','ENTREGUE'],
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
    )
}

export default ItemComanda;