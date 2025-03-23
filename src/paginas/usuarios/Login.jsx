import Formulario from "../../componentes/utilitarios/Formulario";
import { diferencaEmDias } from "../../componentes/utilitarios/Funcoes";
import { useState, useEffect } from "react";
import Mensagem from "../../componentes/utilitarios/Mensagem";
import Cookies from 'js-cookie';
import { api_url } from "../../componentes/utilitarios/API";

const Login = () => {

    const endpoint = 'usuario.php';

    const titulo = 'Login';

    const [mensagem, setMensagem] = useState('');

    const login = async (valoresInformados) => {

        const valores = {
            ...valoresInformados,
            login: true,
        };
        try {
            const response = await fetch(`${api_url}/${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(valores)
            });

            const data = await response.json();

            setMensagem(<Mensagem key={Date.now()} tipo={data.ok} mensagem={data.mensagem} />);
            if (!data.ok) {
                console.table(data);
            } else {
                Cookies.set('token', data.token, diferencaEmDias(data.data_hora_expiracao_token))
            }
        } catch (error) {
            setMensagem(<Mensagem key={Date.now()} tipo={false} mensagem={error} />);
            console.error('Erro ao enviar requisição: ', error);
        }
    }

    const campos = {
        email: {
            tipo: 'email',
            placeholder: 'Digite seu email',
        },
        senha: {
            tipo: 'password',
            placeholder: 'Digite sua senha',
        }
    }

    const [valores, setValores] = useState(
        Object.fromEntries(
            Object.keys(campos).map((chave) => [chave, ''])
        )
    );

    const botoes = {
        criar_conta: {
            texto: 'Criar conta',
            classe: 'btn-primary',
            acao: () => console.log('Criar conta')
        },
        entrar: {
            texto: 'Entrar',
            classe: 'btn-success',
            acao: () => login(valores)
        },
    }

    useEffect(() => {
        // console.table(Cookies.get());
        if (Cookies.get('token')) {
            login({
                token: Cookies.get('token') || null
            });
        }
    }, []);

    return (
        <section>
            <h4>Entrar</h4>
            <Formulario
                titulo={titulo}
                campos={campos}
                botoes={botoes}
                endpoint={endpoint}
                valores={valores}
                setValores={setValores}
            />
            {mensagem}
        </section>
    )

};

export default Login;