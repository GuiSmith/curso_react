// Componentes react
import { useState, useEffect } from "react";
import queryString from "query-string";

// Componentes
import Formulario from "@componentes/utilitarios/Formulario";
import Mensagem from "@componentes/utilitarios/Mensagem";

//Utilitários
import { api_url, api_options } from '@componentes/utilitarios/API';
import { resetarURL, definirURL } from '@componentes/utilitarios/Funcoes';

const Registro = ({ titulo, campos, endpoint, botoesPersonalizados = [] }) => {

    const [mensagem, setMensagem] = useState('');

    const [valores, setValores] = useState('');

    const [novoRegistro, setNovoRegistro] = useState(true);

    const url = `${api_url}/${endpoint}`;

    const resetarValores = () => {
        setValores(
            Object.fromEntries(
                Object.keys(campos).map((chave) => [chave, campos[chave].value ?? ''])
            )
        );
    };

    useEffect(() => {
        if (Object.keys(campos).length === 0) return;
        resetarValores();
    }, [campos]);

    useEffect(() => {

        const params = queryString.parse(window.location.search);
        const options = api_options('GET');

        if (params.id && campos.hasOwnProperty('id')) {
            fetch(`${url}?id=${params.id}`, options)
                .then(response => response.json())
                .then(data => {
                    if (data.ok) {
                        setValores(data.lista[0]);
                        setNovoRegistro(false);
                    }
                    setMensagem(<Mensagem key={Date.now()} tipo={data.ok} mensagem={data.mensagem} />)
                })
        } else {
            resetarValores();
            setNovoRegistro(true);
        }
    }, [novoRegistro]);

    const novo = () => {
        resetarValores();
        resetarURL();
        setNovoRegistro(true);
    }

    const salvar = () => {

        console.log(valores);

        const method = valores.id ? 'PUT' : 'POST';
        const options = api_options(method, valores);

        if (options === null) {
            setMensagem(<Mensagem key={Date.now()} tipo={false} mensagem='Nenhum dado foi preenchido' />);
            return;
        }
        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                setMensagem(<Mensagem key={Date.now()} tipo={data.ok} mensagem={data.mensagem} />);
                if (data.ok) {
                    if (method == 'POST') {
                        resetarValores();
                        resetarURL();
                        definirURL([{ id: data.id }]);
                        setNovoRegistro(false);
                    }
                    if (method == 'PUT') {
                        window.location.reload();
                    }
                } else {
                    console.log(data);
                }
            })
            .catch(error => {
                console.error(error);
                setMensagem(<Mensagem key={Date.now()} tipo={false} mensagem={`Erro: ${error.message}`} />)
            });
    };

    const deletar = () => {
        const confirmation = confirm(`Realmente deseja deletar este ${titulo.toLowerCase()}?`);

        if (!confirmation) return;

        fetch(`${url}?id=${valores.id}`, api_options('DELETE'))
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    novo();
                    setMensagem(<Mensagem key={Date.now()} tipo={data.ok} mensagem={data.mensagem} />);
                } else {
                    console.table(data);
                }
            })
            .catch(error => {
                console.error(error);
                setMensagem(<Mensagem key={Date.now()} tipo={false} mensagem={`Erro: ${error}`} />);
            });
    }

    const botoesPadrao = [
        {
            texto: 'Novo',
            classe: 'btn-primary',
            acao: () => novo()
        },
        {
            texto: 'Salvar',
            classe: 'btn-success',
            acao: () => salvar()
        },
        {
            texto: 'Listar',
            classe: 'btn-dark',
            acao: () => console.log('Listar')
        },
        {
            texto: 'Deletar',
            classe: 'btn-danger',
            disabled: novoRegistro,
            acao: () => deletar()
        },
    ];

    const botoes = [
        ...Object.values(botoesPadrao),
        ...botoesPersonalizados.map(botao => ({
            ...botao,
            acao: () => botao.acao(valores)
        })),
    ];

    return (
        <section>
            <h4>{titulo}</h4>
            <Formulario
                campos={campos}
                botoes={botoes}
                valores={valores}
                setValores={setValores}
            />
            {mensagem}
        </section>
    )
};

export default Registro;