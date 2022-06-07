const { Model, DataTypes } = require('sequelize');

class Professores extends Model {
    static init(sequelize) {
        super.init({
            nome_descricao: DataTypes.STRING,
            cpf: DataTypes.STRING,
            materia: DataTypes.STRING,
        }, { sequelize });

    }
} 

module.exports = Professores;

