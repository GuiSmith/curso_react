import { useEffect, useState } from 'react';
import { api_url, api_options, api_limit } from '../utilitarios/API';

import Tabela from '../utilitarios/Tabela';
import Botoes from '../utilitarios/Botoes';
import Mensagem from '../utilitarios/Mensagem';

const Listagem = ({ titulo, endpoint, colunas = [], setColunas, botoes = [], condicoes= {} }) => {

    const [mensagem, setMensagem] = useState('');

    const [objetos, setObjetos] = useState([]);

    const [offset, setOffset] = useState(0);

    const [total, setTotal] = useState(0);

    useEffect(() => {
        // Resgatando total sem filtros
        const url = `${api_url}/${endpoint}`;
        fetch(url, api_options('GET'))
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    setTotal(data.lista.length);
                } else {
                    console.log(`Não foi possível calcular o total: ${data.mensagem}`);
                    console.table(data);
                }
            })
            .catch(error => {
                setMensagem(<Mensagem key={Date.now()} tipo={false} mensagem={`Erro: ${error}`} />);
            });

        // Resgatando objetos
        const conditions = Object.entries(condicoes)
            .map(([campo, valor]) => `${campo}=${encodeURIComponent(valor)}`)
            .join('&');
        const fields = colunas.length > 0 ? `fields=${colunas.join(',')}` : '';
        const orderBy = 'order_by=id';
        const limit = `limit=${api_limit}`;
        const parts = [conditions,fields, `offset=${offset}`, limit, orderBy].filter(p => p);
        const completeURL = `${url}?${parts.join('&')}`;
        const options = api_options('GET');
        // console.log(url);

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

    }, [offset]);

    // Definir quantidade de páginas
    const paginas = Math.ceil(total / api_limit);

    const [pagina, setPagina] = useState(1);

    const [paginacao, setPaginacao] = useState('');

    const [links,setLinks] = useState([]);

    const handleProximaPagina = (proxPagina) => {
        // Definindo nova página
        if(proxPagina > 0 && proxPagina <= paginas){
            setPagina(proxPagina);
            // Tirando classe active da página atual
            const paginaAtiva = document.querySelector(`nav li.active`);
            if(paginaAtiva){
                paginaAtiva.classList.remove('active');
            }
            // Adicionando classe active na próxima página
            const proxPaginaAtiva = document.querySelector(`#pagina-${proxPagina}`);
            proxPaginaAtiva.classList.add('active');
            if(proxPagina == 1){
                setOffset(0);
            }else{
                setOffset((proxPagina*api_limit)-api_limit);
            }
        }
    };

    const criarLinkPaginacao = (texto, pagina) => {
        return (
            <li id={`pagina-${texto}`} key={`pagina-${texto}`} className={`page-item ${texto == 1 ? 'active' : ''}`} onClick={() => handleProximaPagina(pagina)} >
            <a className='page-link' href="#" onClick={(e) => e.preventDefault()}>
                {texto}
            </a>
            </li>
        )
    };

    useEffect(() => {
        // Criar jsx de paginação
        const localLinks = [];
        for (let i = 1; i <= paginas; i++) {
            localLinks.push(criarLinkPaginacao(i, i));
        }
        setLinks(localLinks);
    }, [objetos]);

    return (
        <article>
            <h2 className='text-center'>{titulo}</h2>
            {<Botoes classes='mb-3' botoes={botoes} />}
            <nav>
                <ul className='pagination'>
                    {criarLinkPaginacao('«', pagina - 1)}
                    {links}
                    {criarLinkPaginacao('»', pagina + 1)}
                </ul>
            </nav>
            <Tabela colunas={colunas} objetos={objetos} total={total} />
            {mensagem}
        </article>
    )
};

export default Listagem;