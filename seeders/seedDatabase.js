const { sequelize } = require('../models'); 
const imageSeeder = require('./imageSeeder'); 

const seedDatabase = async () => {
  try {
    const Puzzle = sequelize.models.Puzzle;

    await Puzzle.bulkCreate(
      imageSeeder.backgrounds.concat(imageSeeder.fashion).concat(imageSeeder.nature)
    );

    console.log('Database seeding completed successfully.');
  } catch (error) {
    console.error('Error seeding the database:', error);
  }
};

module.exports = seedDatabase;
