# Task Manager - Desafio Técnico (Angular + .NET)

Este repositório contém a minha solução para o desafio técnico de desenvolvimento de uma aplicação web para gerenciamento de tarefas. O projeto foi construído utilizando **Angular** no front-end e **ASP.NET Core Web API** no back-end, com persistência de dados em **SQL Server**.

## 🚀 Sobre o Projeto

A aplicação permite o controle completo de tarefas (CRUD), possibilitando ao usuário criar, listar, editar e excluir registros. Além disso, implementei filtros por status para facilitar a visualização das tarefas pendentes e concluídas.

### Principais Tecnologias
- **Front-end:** Angular 17, TypeScript, CSS3.
- **Back-end:** .NET 8 (C#), Entity Framework Core.
- **Banco de Dados:** SQL Server.
- **Ferramentas:** HttpClient para consumo de API, Migrations para versionamento do banco.

## 🛠️ Como rodar a aplicação

### Pré-requisitos
- .NET SDK 8.0
- Node.js (v18+)
- SQL Server LocalDB

### Passo 1: Configurando o Back-end
1. Acesse a pasta `TaskManager.Api`.
2. No terminal, execute `dotnet ef database update` para criar o banco de dados local.
3. Inicie a API com `dotnet run`.
4. A API estará disponível em `http://localhost:5000`.

### Passo 2: Configurando o Front-end
1. Acesse a pasta `TaskManager-Web`.
2. Instale as dependências com `npm install`.
3. Inicie o projeto com `npm start` ou `ng serve`.
4. Acesse `http://localhost:4200` no seu navegador.

## 📝 Notas de Desenvolvimento
- Optei por uma arquitetura simples e direta, focando na organização dos componentes e na correta comunicação entre o front e o back.
- Implementei validações básicas nos formulários para garantir a integridade dos dados.
- O layout foi pensado para ser limpo e intuitivo, utilizando CSS puro para demonstrar domínio sobre a estilização.

---

