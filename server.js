const cors = require('cors'); // Importe o middleware cors
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema.js');
const resolvers = require('./resolvers.js');

const app = express();

app.use(cors()); // Use o middleware cors para permitir requisições de qualquer origem

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
}));

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}/graphql`);
});