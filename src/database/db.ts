import { Sequelize } from 'sequelize';

const connection = new Sequelize('guiaperguntas', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

function createConnectionDataBase(connection: Sequelize) {
  return connection.authenticate().then(() => {
    console.log('Conexão feita com o banco de dados!');
  });
}

export { connection, createConnectionDataBase };
