'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        require: [true, 'Please enter your First Name'],
        type: Sequelize.STRING
      },
      lastName: {
        require: [true, 'Please enter your Last Name'],
        type: Sequelize.STRING
      },
      email: {
        require: true,
        type: Sequelize.STRING
      },
      username: {
        require: [true, 'Please enter a Username'],
        type: Sequelize.STRING
      },
      password: {
        require: true,
        type: Sequelize.STRING,
        minlength: [6, 'Password must be minimum of 6 characters'],
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};