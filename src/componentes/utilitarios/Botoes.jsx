import { NavLink } from 'react-router-dom';

const Botoes = ({ botoes, classes = '' }) => {
    return (
        <div className={classes}>
            {
                Object.keys(botoes).map((key) => {
                    const botao = botoes[key];
                    if (botao.to && !botao.acao) {
                        return (
                            <NavLink
                                key={key}
                                to={botao.disabled ? '' : botao.to}
                                className={`btn ${botao.classe || 'btn-dark'} me-2 ${(!botao.to || botao.disabled) ? 'disabled' : ''}`}
                            >
                                {botao.texto || 'Botão'}
                            </NavLink>
                        );
                    } else {
                        return (
                            <button
                                key={key}
                                className={`btn ${botao.classe || 'btn-dark'} me-2`}
                                onClick={botao.acao || null}
                                disabled={!botao.acao || botao.disabled}
                            >
                                {botao.texto || 'Botão'}
                            </button>
                        );
                    }
                })
            }
        </div>
    );
}

export default Botoes;