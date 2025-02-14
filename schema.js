const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Montadora {
    id: ID!
    nome: String!
    endereco: String
    veiculos: [Veiculo]  # Adicionamos a relação com Veiculos
  }

  type Veiculo {
    id: ID!
    modelo: String!
    marca: String!
    ano: Int
    montadora: Montadora  # Adicionamos a relação com Montadora
  }

  type Query {
    montadoras: [Montadora]
    montadora(id: ID!): Montadora
    veiculos: [Veiculo]
    veiculo(id: ID!): Veiculo
  }

  type Mutation {
    addMontadora(nome: String!, endereco: String): Montadora
    updateMontadora(id: ID!, nome: String, endereco: String): Montadora
    deleteMontadora(id: ID!): Boolean
    addVeiculo(modelo: String!, marca: String!, ano: Int, montadora_id: ID!): Veiculo
    updateVeiculo(id: ID!, modelo: String, marca: String, ano: Int, montadora_id: ID): Veiculo
    deleteVeiculo(id: ID!): Boolean
  }
`);

module.exports = schema;