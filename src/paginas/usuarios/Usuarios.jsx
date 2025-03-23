import Listagem from "../utilitarios/Listagem";
import { useState } from 'react';

const Usuarios = () => {

    const endpoint = 'usuario.php';

    const titulo = 'Usuários';

    const [colunas, setColunas] = useState(['id', 'ativo', 'nome', 'email', 'data_hora_cadastro']);

    const botoes = [
        {
            texto: 'Novo',
            classe: 'btn-primary',
            acao: () => console.log('Novo')
        },
        {
            texto: 'Importar',
            classe: 'btn-secondary',
            acao: () => console.log('Importar')
        },
        {
            texto: 'Exportar',
            classe: 'btn-dark',
            acao: () => console.log('Exportar')
        }
    ];

    return (
        <section className='container-fluid'>
            <Listagem
                titulo={titulo}
                endpoint={endpoint}
                colunas={colunas}
                setColunas={setColunas}
                botoes={botoes}
            />
        </section>
    )
};

export default Usuarios;