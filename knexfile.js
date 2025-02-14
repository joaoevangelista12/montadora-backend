module.exports = {
    development: {
      client: 'sqlite3',
      connection: {
        filename: './dev.sqlite3' // Nome do arquivo do banco de dados
      },
      useNullAsDefault: true, // Necessário para SQLite
      migrations: {
        directory: './migrations' // Pasta onde as migrations serão armazenadas
      },
      seeds: {
        directory: './seeds' // Pasta onde os seeds serão armazenados (opcional)
      }
    }
  };