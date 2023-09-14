const { sequelize } = require('./models');
const fs = require('fs');

const modelName = 'Puzzle';

const generateSeederFileContent = (imageSeeder) => {
  const seederFileContent = `module.exports = {
    up: async (queryInterface, Sequelize) => {
      const imageSeedData = [
        ${Object.keys(imageSeeder).map((theme) => {
          return `{
            name: "${theme} Image",
            puzzleTheme: "${theme}",
            image: "URL_OR_FILE_PATH_HERE", // Replace with the actual URL or file path
            timeToComplete: 0, // You can set the time to complete as needed
            createdAt: new Date(),
            updatedAt: new Date(),
          }`;
        }).join(',\n')}
      ];

      await queryInterface.bulkInsert('${modelName}s', imageSeedData, {});
    },
    down: async (queryInterface, Sequelize) => {
      // Delete all records you inserted during the up migration
      await queryInterface.bulkDelete('${modelName}s', null, {});
    },
  };`;
  return seederFileContent;
};

module.exports = generateSeederFileContent;
