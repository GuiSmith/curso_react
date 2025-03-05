# Curso React
Este mini projeto foi criado com o objetivo de praticar alguns conceitos básicos do React aprendidos no curso [React JS para iniciantes](https://www.udemy.com/course/react-js-para-iniciantes-com-exercicios-e-projeto/).

## Estrutura do projeto
```bash
.
├── App.css
├── App.jsx
├── assets
│   └── react.svg
├── componentes
│   ├── BarraDeNavegacao.jsx
│   ├── itens
│   │   ├── Item.jsx
│   │   └── Itens.jsx
│   ├── Rodape.jsx
│   ├── usuarios
│   │   ├── Login.jsx
│   │   ├── Usuario.jsx
│   │   └── Usuarios.jsx
│   └── utilitarios
│       ├── API.jsx
│       ├── Botoes.jsx
│       ├── Formulario.jsx
│       ├── Funcoes.jsx
│       ├── Listagem.jsx
│       ├── Mensagem.jsx
│       ├── Registro.jsx
│       └── Tabela.jsx
├── index.css
└── main.jsx

6 directories, 20 files
```

## Componentes utilitários
Criei alguns componentes utilitários que ajudam na criação de telas básicas de CRUD:

- **API.jsx**: Funções para chamadas de API.
- **Botoes.jsx**: Componentes de botões reutilizáveis.
- **Formulario.jsx**: Componentes para criação de formulários.
- **Funcoes.jsx**: Funções utilitárias diversas.
- **Listagem.jsx**: Componente para exibição de listas de dados, utilizando o componente **Tabela.jsx** para exibir os dados em formato de tabela.
- **Mensagem.jsx**: Componente para exibição de mensagens de feedback.
- **Registro.jsx**: Componente para formulários de registro, utilizando o componente **Formulario.jsx** para criar os formulários de registro.

Os componentes **Listagem.jsx** e **Registro.jsx** são considerados componentes intermediários, pois combinam e utilizam outros componentes básicos para fornecer funcionalidades mais complexas e específicas.

Por exemplo, **Listagem.jsx** usa **Tabela.jsx** e recebe informações básicas de endpoint, título e botões personalizados. Ele já conta com botões CRUD embutidos e as requisições são pré-preparadas.

Se **Listagem.jsx** não existisse, o desenvolvedor front-end teria que fazer as requisições API todas as vezes para então usar **Tabela.jsx** e ainda teria que criar os botões CRUD.

Outro exemplo, **Registro.jsx** usa **Formulario.jsx** para criar formulários de registro que já vêm com as opções CRUD e lida com busca de ID na URL, algo que teria que ser programado a cada tela de registro.

## Componentes CRUD
Para aqueles tipos de registros básicos, criei uma pasta com duas telas: uma para visualizar um registro e outra para listar todos os registros

Como exemplo, temos a pasta `usuarios` e `itens`.

## Outros componentes
É claro que há tipos de registros que são complexos pois dependem de regras de negócio para funcionar, mas ao utilizar os componentes CRUD, a vida fica mais fácil, acredito.

## Observação
Este mini projeto usou como base um outro projeto de [API de restaurante](https://github.com/GuiSmith/restaurante) que criei na disciplina de Banco de Dados 2 no meu curso de Sistemas de Informação.