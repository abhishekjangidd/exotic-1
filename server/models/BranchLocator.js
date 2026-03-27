const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class BranchLocator extends Model {}

  BranchLocator.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    address: { type: DataTypes.STRING, allowNull: false },
    lat: { type: DataTypes.DECIMAL(10,7), allowNull: true },
    lng: { type: DataTypes.DECIMAL(10,7), allowNull: true },
  }, {
    sequelize,
    modelName: 'BranchLocator',
    tableName: 'branch_locators',
    timestamps: true,
  });

  return BranchLocator;
};
