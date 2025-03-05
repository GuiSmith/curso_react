import Cookies from "js-cookie";

const api_url = 'http://localhost/restaurante/back/api';

const token = Cookies.get('token');

const api_options = (api_method, api_body = {}) => {
    const obj = {
        method: api_method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    if(!['GET','DELETE'].includes(api_method)){
        obj.body = JSON.stringify(api_body);
    }
    return obj;
}

export {api_url, token, api_options };