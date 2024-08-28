## Supermarket List API

API em Node.js usando Express e Mongoose para conectar a um banco de dados MongoDB.

O objetivo principal é facilitar a vida dos usuários do aplicativo que vão ao supermercado e esquecem os itens que precisavam comprar. Assim, essa API tem como finalidade organizar essa lista de compras.

### Tecnologias Usadas

-Node.js
-Express
-Mongoose
-MongoDB
-Nodemon

### Tecnologias Necessárias

- Node.js instalado (https://nodejs.org)
  -Express
  -Mongoose
- MongoDB instância em execução:
  Ex:Rodar com docker

```
docker run --name supermarket-list -p 27017:27017 -d mongo
```

### Passos para executar o projeto

1- Clone o repositório:

```
git clone https://github.com/JOAOmarcelo1604/supermarket-list-api
```

2- Navegue até o repositório:

```
cd supermarket-list-api
```

3- Instale as dependências:

```
npm install
```

4- Execute a API:

```
npm run start:dev
```

### Regra Importante

É necessário enviar o nome de usuário no cabeçalho da requisição

### Endpoints Disponíveis

- [GET]/list-items
- [POST]/list-items
- [DELETE]/list-items/:id
- [PUT]/list-items/:id

### Documentação:

Use o Insomnia para importar o arquivo abaixo:

```
https://github.com/JOAOmarcelo1604/supermarket-list-api/blob/main/Insomnia.json
```
