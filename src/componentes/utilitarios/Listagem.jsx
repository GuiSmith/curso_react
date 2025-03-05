import { useEffect, useState } from 'react';
import { api_url, api_options } from '../utilitarios/API';

import Tabela from '../utilitarios/Tabela';
import Mensagem from '../utilitarios/Mensagem';

const Listagem = ({ titulo, endpoint, colunas = [], setColunas, botoes = [] }) => {

    const [mensagem, setMensagem] = useState('');

    const [objetos, setObjetos] = useState([]);

    useEffect(() => {
        const fields = colunas.length > 0 ? `fields=${colunas.join(',')}` : '';
        const url = `${api_url}/${endpoint}?${fields}`;
        const options = api_options('GET');

        fetch(url,options)
        .then(response => {
            if(!response.ok){
                console.table(response);
            }
            return response.json();
        })
        .then(data => {
            if(data.ok){
                setColunas(Object.keys(data.lista[0]));
                setObjetos(data.ok ? data.lista : []);
            }
            setMensagem(<Mensagem key={Date.now()} tipo={data.ok} mensagem={data.mensagem} />);
        })
        .catch(error => setMensagem(<Mensagem key={Date.now()} tipo={false} mensagem={error} />));

    },[]);

    return (
        <article>
            <Tabela titulo={titulo} colunas={colunas} objetos={objetos} botoes={botoes} />
            {mensagem}
        </article>
    )
};

export default Listagem;