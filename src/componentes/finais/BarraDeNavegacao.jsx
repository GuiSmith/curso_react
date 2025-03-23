const BarraDeNavegacao = ({ logado }) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Navbar</a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/usuarios">Usuários</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default BarraDeNavegacao;