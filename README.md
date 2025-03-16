# Curso React
Este mini projeto foi criado com o objetivo de praticar alguns conceitos básicos do React aprendidos no curso [React JS para iniciantes](https://www.udemy.com/course/react-js-para-iniciantes-com-exercicios-e-projeto/).

# Estrutura do projeto
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

# Componentes
Os componentes são blocos reutilizáveis de código que ajudam a construir interfaces de usuário de forma modular e eficiente. A ideia deste repositório é entender melhor o conceito de componentização e explorar suas possibilidades. Estou cursando a disciplina de Programação 1, onde aprenderemos React, e por isso me interessei em estudar React e componentização.

## Componentes utilitários

### Intermediários
Combinam e utilizam outros componentes básicos para fornecer funcionalidades mais complexas e específicas:

- **Listagem.jsx**: Componente para exibição de listas de dados, utilizando o componente **Tabela.jsx** para exibir os dados em formato de tabela. Recebe informações básicas de endpoint, título e botões personalizados. Já conta com botões CRUD embutidos e as requisições são pré-preparadas.
- **Registro.jsx**: Componente para formulários de registro, utilizando o componente **Formulario.jsx** para criar os formulários de registro. Lida com busca de ID na URL e já vem com as opções CRUD.

### Mostragem
Criei alguns componentes de mostragem que ajudam na criação de telas básicas de CRUD:

- **Botoes.jsx**: Componentes de botões reutilizáveis.
- **Formulario.jsx**: Componentes para criação de formulários.
- **Mensagem.jsx**: Componente para exibição de mensagens de feedback.
- **Tabela.jsx**: Componente para exibição de dados em formato de tabela.

### Gerais
Componentes e funções gerais que são utilizados em várias partes do projeto:

- **API.jsx**: Funções para chamadas de API.
- **Funcoes.jsx**: Funções utilitárias diversas.

## Componentes CRUD
Para aqueles tipos de registros básicos, criei uma pasta com duas telas: uma para visualizar um registro e outra para listar todos os registros

Como exemplo, temos a pasta `usuarios` e `itens`.

## Componentes diversos
É claro que há tipos de registros que são complexos pois dependem de regras de negócio para funcionar, mas ao utilizar os componentes CRUD, a vida fica mais fácil, acredito.

# Observação
Este mini projeto usou como base um outro projeto de [API de restaurante](https://github.com/GuiSmith/restaurante) que criei na disciplina de Banco de Dados 2 no meu curso de Sistemas de Informação.