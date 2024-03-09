const { sequelizeInstance } = require("../config/mysql");
const { DataTypes, Sequelize } = require("sequelize");

const Medico = sequelizeInstance.define('medico', {
    id_medEspecialista: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },

    especialidad: {
        type: DataTypes.STRING
    },
    
    numContacto: {
        type: DataTypes.INTEGER
    },
 
},
{timestamps: false,
tableName: 'medico',
}

);

Medico.find = Medico.findAll;
Medico.findByid = Medico.findByPK;
module.exports =  Medico;