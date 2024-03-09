const { sequelizeInstance } = require("../config/mysql");
const { DataTypes, Sequelize } = require("sequelize");

const Paciente = sequelizeInstance.define('paciente', {
    id_paciente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    direccion: {
        type: DataTypes.STRING
    },
    num_contacto: {
        type: DataTypes.INTEGER
    },
    his_medico: {
        type: DataTypes.STRING
    }
},
{timestamps: false,
tableName: 'paciente',
}

);

Paciente.find = Paciente.findAll;
Paciente.findByid = Paciente.findByPK;
module.exports =  Paciente;