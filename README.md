# Estudo-NestJS

Este é um projeto de estudo utilizando o framework NestJS, com o objetivo de aprender sobre arquitetura de aplicações backend, integração com TypeORM e PostgreSQL.

## Tecnologias Usadas

- **NestJS**: Framework de Node.js baseado em TypeScript para criar aplicações backend escaláveis e de alto desempenho.
- **TypeORM**: Biblioteca ORM para trabalhar com bancos de dados relacionais, como PostgreSQL.
- **PostgreSQL**: Sistema de banco de dados relacional utilizado para armazenar dados.
- **ESLint**: Ferramenta para análise estática de código JavaScript/TypeScript.
- **Prettier**: Ferramenta de formatação automática de código.

## Funcionalidades

O projeto atualmente possui uma estrutura básica de backend, com o foco em CRUD (Create, Read, Update, Delete) para gerenciar tarefas. As funcionalidades incluem:

- **Criar Tarefa**: Permite criar uma nova tarefa.
- **Buscar Tarefa por ID**: Permite buscar uma tarefa existente pelo seu ID.
- **Validação de Entrada**: Validação dos dados de entrada usando decorators do NestJS.

## Como Rodar o Projeto

### Pré-requisitos

Certifique-se de ter os seguintes programas instalados:

- Node.js (versão 18 ou superior)
- PostgreSQL (ou um container Docker com PostgreSQL)
- Git

### Passos

1. **Clone o repositório:**

```bash
git clone https://github.com/GuilhermeSantiago25/Estudo-NestJs.git
cd Estudo-NestJs
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Configure o Banco de Dados:**

Edite o arquivo `.env` na raiz do projeto com as configurações do seu banco de dados:

```
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=admin
DB_PASSWORD=admin123
DB_DATABASE=task-management
```

4. **Execute o projeto:**

```bash
npm run start
```

5. **Acesse a aplicação no navegador:**

Abra seu navegador e vá para `http://localhost:3000`.

## Estrutura do Projeto

A estrutura do código está organizada da seguinte forma:

- **src/**
  - **tasks/**
    - `tasks.controller.ts`: Controlador que lida com as rotas relacionadas às tarefas.
    - `tasks.service.ts`: Serviço que contém a lógica de negócios para manipular as tarefas.
    - `task.entity.ts`: Entidade que representa o modelo de dados de uma tarefa no banco de dados.
    - `tasks.repository.ts`: Repositório personalizado para manipulação de dados (ainda em desenvolvimento).
- **config/**
  - Configurações de ambiente e banco de dados.

## Como Contribuir

1. Faça um fork deste repositório.
2. Crie uma branch para a sua feature (`git checkout -b feature/nova-feature`).
3. Faça as alterações e commit (`git commit -am 'Adicionando nova feature'`).
4. Envie para o repositório remoto (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
