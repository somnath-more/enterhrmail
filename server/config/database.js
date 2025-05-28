const { Sequelize } = require('sequelize');
const config = require('./index');

const sequelize = new Sequelize(
  config.DB.database,
  config.DB.user,
  config.DB.password,
  {
    host: config.DB.host,
    dialect: config.DB.dialect,
    logging: config.NODE_ENV === 'development' ? console.log : false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

// Test the connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
})();

module.exports = sequelize;