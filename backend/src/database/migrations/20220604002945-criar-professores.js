'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('professores', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome_descricao: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },      nome_descricao: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      materia: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('professores')
  }
};

