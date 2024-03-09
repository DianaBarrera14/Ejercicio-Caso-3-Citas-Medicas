const { sequelizeInstance } = require("../config/mysql");
const { DataTypes, Sequelize } = require("sequelize");

const Historial = sequelizeInstance.define('historial', {
    id_hisCita: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fecha_cita: {
        type: DataTypes.DATE,
    },
    hora_cita: {
        type: DataTypes.STRING,
    },
    id_cita: {
        type: DataTypes.INTEGER,
        references: {
            model: 'cita',
            key: 'id_cita'
        }
    },
    diagnostico: {
        type: DataTypes.STRING,
    },
    tratamientos: {
        type: DataTypes.STRING,
    }
},
{timestamps: false,
tableName: 'historial_citas',
}

);

Historial.find = Historial.findAll;
Historial.findByid = Historial.findByPK;
module.exports =  Historial;