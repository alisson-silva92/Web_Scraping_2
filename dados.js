const Sequelize = require('sequelize');
const database = require('./db');

const Dados = database.define('produto', {

    Nome: {
        type: Sequelize.CHAR
    },
    Registro_CAU: {
        type: Sequelize.CHAR
    },
    Data_inicio_registro: {
        type: Sequelize.CHAR
    },
    Data_fim_registro: {
        type: Sequelize.CHAR
    },
    Situacao_registro: {
        type: Sequelize.CHAR
    },
    Municipio: {
        type: Sequelize.CHAR
    },
    Uf:{
        type: Sequelize.CHAR
    }
})

module.exports = Dados;








// Resultado por nome    *
// Registro CAU
// Data início registro
// Data fim registro
// Situação do registro
// Município
// UF