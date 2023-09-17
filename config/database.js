// const {Sequelize} = require ('sequelize')
// require('dotenv').config()


// const dbURL = process.env.DB_URL;

// const sequelize = new Sequelize(dbURL);

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Database connection has been established successfully.');
//   })
//   .catch((error) => {
//     console.error('Unable to connect to the database:', error);
//   });

// module.exports = sequelize;

const { Sequelize } = require('sequelize');
require('dotenv').config();

Sequelize.Model.cache = null;


// Load the configuration from your JSON object
const config = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: 'postgres',
};

const sequelize = new Sequelize(config);

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

module.exports = sequelize;


  