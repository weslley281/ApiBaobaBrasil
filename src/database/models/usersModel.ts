import { DataTypes } from 'sequelize';
import { connection } from '../db';

const userModel = connection.define('user', {
  user_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  admin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

function createTableUser(user: any) {
  return user.sync({ force: false }).then(() => {
    console.log('Tabela de usuários criada');
  });
}

export { userModel, createTableUser };