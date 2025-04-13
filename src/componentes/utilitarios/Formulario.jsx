// Componentes react
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useState, useEffect } from 'react';

// Componentes utilitários
import { chaveParaTexto } from './Funcoes';
import Botoes from './Botoes';
import { api_limit, api_url, api_options } from './API';

const Formulario = ({ campos, botoes = [], valores, setValores }) => {

    const formatarCampo = (tipo, valor) => {
        if (!valor) return valor;

        switch (tipo) {
            case 'checkbox':
                return valor ? 'checked' : '';
                break;
            case 'date':
                return format(valor, "yyyy-MM-dd", { locale: ptBR });
                break;
            case 'datetime-local':
                return format(valor, "yyyy-MM-dd'T'HH:mm:ss", { locale: ptBR });
                break;
            case 'time':
                return format(valor, "HH:mm:ss");
                break;
            default:
                return valor;
                break;
        }
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        // console.log(`Input Change - Name: ${name}, Type: ${type}, Value: ${value}`);
        setValores((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        console.log(`${name}: ${value}`);
    };

    const renderLabel = (key, className, htmlFor, text) => {
        return (
            <label key={key} className={className} htmlFor={htmlFor}>
                {text}
            </label>
        );
    };

    const renderInput = (commonProps, type, id, checked = null) => {

        if (type == 'radio') {
            return (
                <input {...commonProps} id={id} key={id} value={id} checked={checked} />
            );
        } else {
            return (
                <input {...commonProps} id={id} test={id} />
            );
        }
    };

    const renderField = (nome, atributos) => {

        const commonProps = {
            name: nome,
            onChange: handleChange,
            disabled: atributos.disabled,
            required: atributos.required,
            placeholder: atributos.placeholder,
            className: ['checkbox', 'radio'].includes(atributos.tipo) ? 'form-check-input' : 'form-control',
            type: atributos.tipo,
            ...atributos.tipo === 'checkbox' ? { checked: valores[nome] || false } : { value: formatarCampo(atributos.tipo, valores[nome]) || '' }
        };

        if (atributos.tipo == 'radio') {
            return (
                <div className='mb-3' key={nome}>
                    {atributos.options.map((option) => (
                        <div className='form-check' key={`${option.toLowerCase()}-label`}>
                            {atributos.tipo != 'hidden' ? renderLabel(`${option.toLowerCase()}-label`, 'form-check-label', option, chaveParaTexto(option.toLowerCase())) : null }
                            {renderInput({ ...commonProps }, atributos.tipo, option, valores[nome] == option ? true : false)}
                        </div>
                    ))}
                </div>
            );
        }

        if(atributos.tipo == 'select') {
            return (
                <div className='mb-3' key={nome}>
                    {atributos.tipo != 'hidden' ? renderLabel(`${nome}-label`, 'form-label', nome, atributos.label ?? chaveParaTexto(nome)) : null}
                    <select {...commonProps} id={nome} key={nome}>
                        <option value="">{atributos.placeholder}</option>
                        {/* {options} */}
                    </select>
                </div>
            );
        }

        const divClassName = `mb-3 ${atributos.tipo == 'checkbox' ? 'form-check' : ''}`;
        const labelClassName = atributos.tipo == 'checkbox' ? 'form-check-label' : 'form-label';
        return (
            <div className={divClassName} key={nome}>
                {atributos.tipo != 'hidden' ? renderLabel(nome, labelClassName, nome, atributos.label ?? chaveParaTexto(nome)) : null}
                {renderInput({ ...commonProps }, atributos.tipo, nome)}
            </div>
        );
    };

    useEffect(() => {
        if(valores){
            console.log(valores);
        }
    },[valores]);

    useEffect(() => {
        const camposSelect = Object.entries(campos).filter(([_, valor]) => valor.tipo === 'select');
        camposSelect.forEach(([name, properties]) => {

            if (!properties.endpoint || !properties.optionLabel) return;

            const { endpoint, optionLabel } = properties;

            const completeUrl = `${api_url}/${endpoint}?fields=${['id', optionLabel].join(',')}`;

            fetch(completeUrl, api_options('GET'))
                .then((response) => response.json())
                .then(data => {
                    console.log(data);
                    if (data.ok) {
                        const lista = data.lista;
                        // Creating options for select
                        const selectElement = document.getElementById(name);
                        selectElement.innerHTML = '';
                        // Se optionLabel não fornecido, desative o campo
                        lista.forEach((item) => {
                            selectElement.appendChild(new Option(item[optionLabel], item.id));
                        });
                    } else {
                        console.log(data.mensagem);
                    }
                })
                .catch(error => {
                    console.error(`Erro ao realizar busca de ${name} por ${searchBy}`);
                    console.log(completeUrl);
                });
        });
    },[campos]);

    return (
        <div>
            <Botoes botoes={botoes} />
            <form className="form mt-3" autoComplete='off'>
                {Object.entries(campos).map(([chave, valor]) => renderField(chave, valor))}
            </form>
        </div>
    );
};

export default Formulario;