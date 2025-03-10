const Botoes = ({ botoes, classes = '' }) => {
    return (
        <div className = {classes}>
            {
                Object.keys(botoes).map((key) => (
                    <button
                        key={key}
                        className={`btn ${botoes[key].classe || 'btn-dark'} me-2`}
                        onClick={botoes[key].acao || null}
                        disabled={!botoes[key].acao || botoes[key].disabled}
                    >
                        {botoes[key].texto || 'Botão'}
                    </button>
                ))
            }
        </div>
    );
}

export default Botoes;