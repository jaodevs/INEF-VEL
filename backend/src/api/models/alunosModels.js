const { Model, DataTypes } = require('sequelize');

class Alunos extends Model {
    static init(sequelize) {
        super.init({
            nome : DataTypes.STRING,
            cpf : DataTypes.STRING,
            dtnascimento : DataTypes.DATE,
            filho : DataTypes.STRING,
            escola : DataTypes.STRING,
            serie : DataTypes.STRING,
        }, { sequelize });

    }
}

module.exports = Alunos;

