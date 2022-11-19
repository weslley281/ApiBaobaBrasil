import { DataTypes } from 'sequelize';
import { connection } from '../db';

const productModel = connection.define('products', {
  product_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descriptiom: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

function createTableProduct(product: any) {
  return product.sync({ force: false }).then(() => {
    console.log('*******Product table successfully created*******');
  });
}

export { productModel, createTableProduct };
