const knex = require('knex')(require('./knexfile.js').development);

const resolvers = {
  Montadora: {
    veiculos: async (montadora) => {
      return await knex('veiculos').where('montadora_id', montadora.id).select();
    }
  },
  Veiculo: {
    montadora: async (veiculo) => {
      return await knex('montadoras').where('id', veiculo.montadora_id).first();
    }
  },
  montadoras: async () => {
    return await knex('montadoras').select();
  },
  montadora: async ({ id }) => {
    return await knex('montadoras').where('id', id).first();
  },
  addMontadora: async ({ nome, endereco }) => {
    const [id] = await knex('montadoras').insert({ nome, endereco });
    return await knex('montadoras').where('id', id).first();
  },
  updateMontadora: async ({ id, nome, endereco }) => {
    await knex('montadoras').where('id', id).update({ nome, endereco });
    return await knex('montadoras').where('id', id).first();
  },
  deleteMontadora: async ({ id }) => {
    await knex('montadoras').where('id', id).del();
    return true;
  },
  veiculos: async () => {
    return await knex('veiculos').select();
  },
  veiculo: async ({ id }) => {
    return await knex('veiculos').where('id', id).first();
  },
  addVeiculo: async ({ modelo, marca, ano, montadora_id }) => {
    const [id] = await knex('veiculos').insert({ modelo, marca, ano, montadora_id });
    return await knex('veiculos').where('id', id).first();
  },
  updateVeiculo: async ({ id, modelo, marca, ano, montadora_id }) => {
    await knex('veiculos').where('id', id).update({ modelo, marca, ano, montadora_id });
    return await knex('veiculos').where('id', id).first();
  },
  deleteVeiculo: async ({ id }) => {
    await knex('veiculos').where('id', id).del();
    return true;
  }
};

module.exports = resolvers;