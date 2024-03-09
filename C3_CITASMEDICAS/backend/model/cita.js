const { sequelizeInstance } = require("../config/mysql");
const { DataTypes, Sequelize } = require("sequelize");

const Cita = sequelizeInstance.define('cita', {
    id_cita: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fecha_inicio: {
        type: DataTypes.DATE
    },
    instruc_adicional: {
        type: DataTypes.STRING
    },
    id_paciente: {
        type: DataTypes.INTEGER,
        references: {
            model: 'paciente',
            key: 'id_paciente'
        }
    },
    id_medEspecialista: {
        type: DataTypes.INTEGER,
        references: {
            model: 'medico',
            key: 'id_medEspecialista'
        }
    },
},
{timestamps: false,
tableName: 'cita',
}

);

Cita.find = Cita.findAll;
Cita.findByid = Cita.findByPK;
module.exports =  Cita;