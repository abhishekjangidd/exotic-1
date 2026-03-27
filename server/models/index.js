const sequelize = require('../config/database');

const User = require('./User')(sequelize);
const Product = require('./Product')(sequelize);
const CustomizationOption = require('./CustomizationOption')(sequelize);
const BranchLocator = require('./BranchLocator')(sequelize);

Product.hasMany(CustomizationOption, { foreignKey: 'product_id', as: 'customizations' });
CustomizationOption.belongsTo(Product, { foreignKey: 'product_id', as: 'product' });

module.exports = {
  sequelize,
  User,
  Product,
  CustomizationOption,
  BranchLocator,
};
