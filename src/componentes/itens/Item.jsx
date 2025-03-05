import Registro from "../utilitarios/Registro";

const Item = () => {

    const titulo = 'Item';

    const endpoint = 'item.php';

    const campos = {
        id: {
            tipo: 'number',
            disabled: true,
        },
        ativo: {
            tipo: 'checkbox',
        },
        descricao: {
            tipo: 'text',
            placeholder: 'Digite aqui...'
        },
        valor: {
            tipo: 'number',
            placeholder: 'Digite o valor aqui'
        },
        tipo: {
            tipo: 'radio',
            options: ['BEBIDA','PRATO'],
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
    )
};

export default Item;