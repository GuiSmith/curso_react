import queryString from 'query-string';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale'; // Para português

// Converte um objeto em uma string de query
const objetoParaQuery = (objeto) => {
    return queryString.stringify(objeto);
};

// Converte uma string de query em um objeto
const queryParaObjeto = (query) => {
    return queryString.parse(query);
};

// Verifica se o valor está no formato de data do banco de dados (YYYY-MM-DD ou YYYY-MM-DD HH:MM:SS)
const dataBancoDeDados = (valor) => {
    const regex = /^\d{4}-\d{2}-\d{2}( \d{2}:\d{2}:\d{2}(\.\d{1,6})?)?$/;
    return regex.test(valor);
};

const formatarData = (timestamp) => {
    return format(new Date(timestamp), "dd/MM/yy HH:mm:ss", { locale: ptBR });
};

// Capitaliza a primeira letra de um texto
const capitalizarTexto = (valor) => {
    if (typeof valor === 'string') {
        return valor.charAt(0).toUpperCase() + valor.slice(1);
    }
    return valor;
};

// Formata o nome de uma coluna, capitalizando e substituindo underscores por espaços
const chaveParaTexto = (valor) => {
    if (valor === 'id') {
        return 'ID';
    }
    if (typeof valor === 'string') {
        return valor.split('_').map(capitalizarTexto).join(' ');
    }
    return valor;
};

const diferencaEmDias = (timestamp) => {
    const dataAtual = new Date();
    const dataInformada = new Date(timestamp);
    const diferencaEmMilissegundos = Math.abs(dataAtual - dataInformada);
    const milissegundosPorDia = 1000 * 60 * 60 * 24;
    return Math.floor(diferencaEmMilissegundos / milissegundosPorDia);
};

const resetarURL = () => {
    const url = new URL(window.location);
    url.search = '';
    window.history.pushState({}, '', url);
};

const definirURL = (parametros) => {
    const url = new URL(window.location);
    
    // Adiciona os parâmetros à URL
    parametros.forEach(param => {
        // Pega a chave e o valor de cada objeto
        const chave = Object.keys(param)[0];
        const valor = param[chave];
        url.searchParams.set(chave, valor);
    });

    // Atualiza a URL sem recarregar a página
    window.history.pushState({}, '', url);
};


export { formatarData, capitalizarTexto, chaveParaTexto, dataBancoDeDados, queryParaObjeto, objetoParaQuery, diferencaEmDias, resetarURL, definirURL };
