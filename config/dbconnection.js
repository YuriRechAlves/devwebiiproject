const sequelize = require('sequelize');

const connection = new sequelize("railway", "root", "7fvBz0oJe3tJLEco0Q9K", {
  host: "containers-us-west-8.railway.app",
  port: 5766,
  dialect: "mysql",
  define: {
    timestamps: false, // para não utilizar campos created_at e updated_at
    freezeTableName: true // para não adicionar o "s" no nome das tabelas
  }
});

connection.authenticate().then(() => {
    console.log('Conexão estabelecida com o banco de dados.');
  }).catch((error) => {
  console.error('Erro ao conectar com o banco de dados:', error);
  });

  module.exports = connection