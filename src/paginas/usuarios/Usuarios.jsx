import Listagem from "@componentes/intermediarios/Listagem";
import { useState } from 'react';

const Usuarios = () => {

    const endpoint = 'usuario.php';

    const titulo = 'Usuários';

    const paginaRegistro = '/usuarios/registro';

    const [colunas, setColunas] = useState(['id', 'ativo', 'nome', 'email', 'data_hora_cadastro']);

    const botoes = [
        {
            texto: 'Novo',
            classe: 'btn-primary',
            to: paginaRegistro
        },
    ];

    return (
        <section className='container-fluid'>
            <Listagem
                titulo={titulo}
                endpoint={endpoint}
                colunas={colunas}
                setColunas={setColunas}
                botoes={botoes}
                paginaRegistro={paginaRegistro}
            />
        </section>
    )
};

export default Usuarios;