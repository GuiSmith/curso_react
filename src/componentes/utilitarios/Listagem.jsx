import { useEffect, useState } from 'react';
import { api_url, api_options, api_limit } from '../utilitarios/API';

import Tabela from '../utilitarios/Tabela';
import Mensagem from '../utilitarios/Mensagem';

const Listagem = ({ titulo, endpoint, colunas = [], setColunas, botoes = [] }) => {

    const [mensagem, setMensagem] = useState('');

    const [objetos, setObjetos] = useState([]);

    const [offset, setOffset] = useState(0);

    useEffect(() => {

        const url = `${api_url}/${endpoint}`;
        fetch(url, api_options('GET'))
            .then(response => response.json())
            .then(data => {
                if(data.ok){
                    console.log(`Total: ${data.lista.length}`);
                }else{
                    console.log("Calculando total");
                    console.table(data);
                }
            })

        const fields = colunas.length > 0 ? `fields=${colunas.join(',')}` : '';
        const orderBy = 'order_by=id';
        const limit = `limit=${api_limit}`;
        const completeURL = `${url}?${[fields, `offset=${offset}`, limit, orderBy].join('&')}`;
        const options = api_options('GET');
        console.log(url);

        fetch(completeURL, options)
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    setColunas(Object.keys(data.lista[0]));
                    setObjetos(data.ok ? data.lista : []);
                } else {
                    console.table(data);
                }
                setMensagem(<Mensagem key={Date.now()} tipo={data.ok} mensagem={data.mensagem} />);
            })
            .catch(error => setMensagem(<Mensagem key={Date.now()} tipo={false} mensagem={error} />));

    }, []);

    return (
        <article>
            <Tabela titulo={titulo} colunas={colunas} objetos={objetos} botoes={botoes} />
            {mensagem}
        </article>
    )
};

export default Listagem;