# B4you---Teste

## Descrição

Este é o backend da aplicação B4You, desenvolvida para o teste técnico de desenvolvedor júnior. A API oferece autenticação via JWT e operações CRUD para gerenciar produtos. O backend foi construído em Node.js com Express e utiliza Sequelize como ORM para um banco de dados MySQL.

## Objetivo

Criar um pequeno sistema de produtos (API + interface web) usando o stack básico da B4You.

## Backend

- Login de usuário autenticado via JWT.
- Criação, listagem, atualização e remoção de produtos.
- Validação de dados via Yup.
- Integração com banco de dados relacional.
- Executar tudo de forma automatizada via Docker Compose.

---

## Decisões de Design - Backend

- **Express**: framework leve e robusto para APIs REST.
- **Sequelize**: ORM que facilita a comunicação com o MySQL e permite uso de migrations e seeds.
- **JWT**: autenticação stateless e segura.
- **Yup**: validação de schemas para os dados recebidos via requisições.
- **Estrutura em camadas**: separação clara entre controllers, services, models e middlewares.
- **Docker Compose**: para facilitar o ambiente de desenvolvimento e garantir consistência entre setups.
- **Script `start.sh`**: automatiza migrations e seeds ao iniciar a aplicação.

---

## Como instalar e executar o projeto

Dê permissão de execução ao script de inicialização:

'chmod +x start.sh'

Suba os containers com Docker Compose:

'sudo docker-compose up --build'

