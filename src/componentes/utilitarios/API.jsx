import Cookies from "js-cookie";

const api_url = 'http://localhost/restaurante/back/api';

const token = Cookies.get('token') || '';

const api_limit = 10;

// Função que retorna um objeto contendo as opções necessárias para fazer uma requisição API
const api_options = (api_method, api_body = {}) => {
    const obj = {
        method: api_method, // Já informado no início da função
        headers: {
            'Content-Type': 'application/json',
        }
    }
    
    if(token.length > 0){
        obj.headers['Authorization'] = `Bearer ${token}`;
    }   

    if(!['GET','DELETE'].includes(api_method)){
        const stripped_api_body = Object.fromEntries(
            Object.entries(api_body).filter(([key,value]) => value ?? false)
        );
        if(Object.keys(stripped_api_body).length == 0){
            return null;
        }else{
            obj.body = JSON.stringify(stripped_api_body);
            console.log(`Tipo do body: ${typeof(obj.body)}`);
        }
    }
    return obj;
}

export {api_url, token, api_limit, api_options };