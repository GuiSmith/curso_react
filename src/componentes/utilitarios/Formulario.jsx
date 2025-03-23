// Componentes react
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

// Componentes utilitários
import { chaveParaTexto } from './Funcoes';
import Botoes from './Botoes';

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

        if (atributos.hidden) return null;
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
                            {renderLabel(`${option.toLowerCase()}-label`, 'form-check-label', option, chaveParaTexto(option.toLowerCase()))}
                            {renderInput({ ...commonProps }, atributos.tipo, option, valores[nome] == option ? true : false)}
                        </div>
                    ))}
                </div>
            );
        } else {
            const divClassName = `mb-3 ${atributos.tipo == 'checkbox' ? 'form-check' : ''}`;
            const labelClassName = atributos.tipo == 'checkbox' ? 'form-check-label' : 'form-label';
            return (
                <div className={divClassName} key={nome}>
                    {renderLabel(nome, labelClassName, nome, chaveParaTexto(nome))}
                    {renderInput({ ...commonProps }, atributos.tipo,nome)}
                </div>
            );
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