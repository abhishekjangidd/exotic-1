const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class CustomizationOption extends Model {}

  CustomizationOption.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    product_id: { type: DataTypes.INTEGER, allowNull: false },
    type: { type: DataTypes.ENUM('milk','cream','topping'), allowNull: false },
    choices: { type: DataTypes.JSONB, allowNull: false },
    price_modifier: { type: DataTypes.DECIMAL(10,2), allowNull: true, defaultValue: 0.00 },
  }, {
    sequelize,
    modelName: 'CustomizationOption',
    tableName: 'customization_options',
    timestamps: true,
  });

  return CustomizationOption;
};
