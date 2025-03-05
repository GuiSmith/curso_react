import Registro from '../utilitarios/Registro';

const Usuario = () => {

    const titulo = 'Usuário';

    const endpoint = 'usuario.php';

    const campos = {
        id: {
            tipo: 'number',
            disabled: true,
            placeholder: '',
        },
        ativo: { 
            tipo: 'checkbox', 
            disabled: false, 
            placeholder: '' 
        },
        nome: { 
            tipo: 'text', 
            disabled: false, 
            placeholder: 'Digite seu nome' 
        },
        email: { 
            tipo: 'email', 
            disabled: false,
            placeholder: 'Digite seu email' 
        },
        senha: { 
            tipo: 'password', 
            disabled: false,
            placeholder: 'Digite sua senha' 
        },
        data_hora_cadastro: { 
            tipo: 'datetime-local', 
            disabled: true, 
            placeholder: '' 
        },
    }

    const botoes = [
        {
            texto: 'Gerar senha',
            classe: 'btn-warning',
            acao: (valores) => console.log("Gerando senha", valores.nome)
        }
    ];

    return (
        <Registro
            titulo={titulo}
            campos={campos}
            endpoint={endpoint}
            botoesPersonalizados={botoes}
        />
    )
};

export default Usuario;