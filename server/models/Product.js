const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Product extends Model {}

  Product.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    base_price: { type: DataTypes.DECIMAL(10,2), allowNull: false },
    category: { type: DataTypes.STRING, allowNull: false },
    image_url: { type: DataTypes.STRING, allowNull: true },
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'products',
    timestamps: true,
  });

  return Product;
};
