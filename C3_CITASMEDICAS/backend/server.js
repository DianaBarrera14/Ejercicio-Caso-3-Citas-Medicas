const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/routes");
require("dotenv").config();
const {dbConnectDB} = require("./config/mysql");

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors()); // Corrección aquí
app.use(bodyParser.json());

app.use("/api", routes);
dbConnectDB();
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
    console.log({
        database: process.env.DB_DATABASE,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
    });
});
