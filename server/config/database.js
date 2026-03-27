const { Sequelize } = require('sequelize');
require('dotenv').config();

const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/coffee_db';

const sequelize = new Sequelize(connectionString, {
  dialect: 'postgres',
  logging: false,
});

module.exports = sequelize;
