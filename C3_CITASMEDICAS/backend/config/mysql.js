const Sequelize = require("sequelize");
require("dotenv").config();
const database = process.env.DB_DATABASE;
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;


const sequelizeInstance = new Sequelize(database, username, password, {
    host: host,
    dialect: "mysql",
});
const dbConnectDB = async () => {
    try {
        await sequelizeInstance.authenticate();
        console.log("Conexión correcta a la base de datos");
    } catch (e) {
        console.error("Conexión incorrecta a la base de datos", e); 
    }
};

module.exports = { sequelizeInstance, dbConnectDB };
