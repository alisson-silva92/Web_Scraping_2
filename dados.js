const Sequelize = require('sequelize');
const db = require('./db');

const Dados = db.define('produto', {

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
  //criar a tabela no banco
Dados.sync();

module.exports = Dados;
