# Automations Cypress

Projeto de automação de testes utilizando Cypress para validação de funcionalidades de aplicações web e APIs. Este projeto foi desenvolvido para testar fluxos como login, listagem de usuários e produtos, além de validações de endpoints RESTful.

## 📋 Funcionalidades

- **Testes de aplicação web**:
  - Login de usuário.
  - Listagem de usuários.
  - Listagem de produtos.

- **Testes de API**:
  - Cadastro de usuários.
  - Login de usuários.
  - Listagem de produtos.

## 🛠️ Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) - Framework de testes end-to-end.
- [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript.
- [Serverest](https://serverest.dev/) - API utilizada para testes.

## 📂 Estrutura do Projeto

```plaintext
cypress/
├── e2e/
│   ├── CT002-listUsersSucess.spec.cy.js   # Teste de listagem de usuários (web)
│   ├── CT004-listProductsSucess.spec.cy.js # Teste de listagem de produtos (web)
│   └── CT008-API_listProductsSucess.spec.spec.js # Teste de listagem de produtos (API)
├── integration/
│   ├── API/
│   │   ├── Testes de API (ex.: cadastro, login, listagem)
│   └── Web/
│       ├── Testes de interface web
└── support/
    ├── commands.js # Comandos personalizados do Cypress
    └── e2e.js      # Configurações globais para testes

   
GitHub Copilot
Aqui está a versão corrigida do seu README.md, removendo repetições e organizando o conteúdo de forma clara:

🚀 Como Executar o Projeto
Pré-requisitos
Node.js (versão 14 ou superior)
Cypress (instalado via npm)

Passos para Configuração
1. Clone o repositório:
git clone https://github.com/seu-usuario/automationsCypress.git

2. Acesse o diretório do projeto:
cd automationsCypress

3. Instale as dependências:
npm install

4. Execute os testes:
Para abrir a interface do Cypress:
npx cypress open

Para rodar os testes em modo headless:
npx cypress run


🧪 Exemplos de Testes

Teste de Login (Web)
Valida o login de um usuário na aplicação web e verifica a mensagem de boas-vindas.

Teste de Cadastro e Login (API)
Registra um novo usuário via API e realiza login com o mesmo, validando o token JWT retornado.

Teste de Listagem de Produtos (API)
Lista os produtos cadastrados na API e valida os campos retornados, como nome, preço, descrição e quantidade.


📝 Notas Importantes

Certifique-se de que a API do Serverest está disponível antes de executar os testes.

Alguns testes utilizam e-mails dinâmicos para evitar conflitos de cadastro.


📄 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para usá-lo e modificá-lo conforme necessário.

Desenvolvido por Afranio Vargas.

