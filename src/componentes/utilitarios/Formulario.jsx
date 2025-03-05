// Componentes react
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

// Componentes utilitários
import { chaveParaTexto } from './Funcoes';
import Botoes from './Botoes';

const Formulario = ({ campos, botoes = [], valores, setValores }) => {

    const formatarCampo = (tipo, valor) => {
        if(!valor) return valor;
        
        switch(tipo){
            case 'checkbox':
                return valor ? 'checked' : '';
                break;
            case 'date':
                return format(valor, "yyyy-MM-dd", {locale: ptBR});
                break;
            case 'datetime-local':
                return format(valor, "yyyy-MM-dd'T'HH:mm:ss", {locale: ptBR});
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
        setValores((prev) => {
            const newValue = { ...prev };
            switch (type) {
                case 'checkbox':
                    newValue[name] = checked;
                    break;
                case 'date':
                    newValue[name] = format(value, "yyyy-MM-dd", {locale: ptBR});
                    break;
                case 'datetime-local':
                    newValue[name] = format(value, "yyyy-MM-dd'T'HH:mm:ss",{locale: ptBR});
                    break;
                case 'time':
                    newValue[name] = format(value, "HH:mm:ss");
                    break;
                default:
                    newValue[name] = value;
                    break;
            }
            return newValue;
        });
    };

    const renderField = (nome, atributos) => {
        const commonProps = {
            name: nome,
            onChange: handleChange,
            disabled: atributos.disabled,
            required: atributos.required,
            ...atributos.tipo === 'checkbox' ? { checked: valores[nome] || false } : { value: formatarCampo(atributos.tipo,valores[nome]) || '' }
        };

        switch (atributos.tipo) {
            case 'radio':
                return (
                    <div className='mb-3' key={nome}>
                        {atributos.options.map((option) => (
                        <div className='form-check' key={`${option.toLowerCase()}-label`}>
                            <label
                                key={`${option.toLowerCase()}-label`}
                                className='form-check-label'
                                htmlFor={option}
                            >
                                {chaveParaTexto(option.toLowerCase())}
                            </label>
                            <input
                                className='form-check-input'
                                type={atributos.tipo}
                                placeholder={atributos.placeholder}
                                {...commonProps}
                                key={option}
                                id={option}
                                value={option}
                                checked={valores[nome] == option ? true : false}
                            />
                        </div>
                    ))}
                    </div>
                )
                break;
            case 'checkbox':
                return (<div className='form-check' key={nome}>
                    <label
                        key={nome}
                        className='form-check-label'
                        htmlFor={nome}
                    >
                        {chaveParaTexto(nome)}
                    </label>
                    <input
                        className='form-check-input'
                        type={atributos.tipo}
                        placeholder={atributos.placeholder}
                        id={nome}
                        {...commonProps}
                    />
                </div>)
                break;
            default:
                return (<div className='mb-3' key={nome}>
                    <label
                        key={nome}
                        className='form-label'
                        htmlFor={nome}
                    >
                        {chaveParaTexto(nome)}
                    </label>
                    <input
                        className='form-control'
                        type={atributos.tipo}
                        placeholder={atributos.placeholder}
                        {...commonProps}
                    />
                </div>);
                break;
        }
    };

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