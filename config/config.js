const { Sequelize }
from "sequelize";

const db = new Sequelize({
    username: "postgres",
    password: "admin",
    database: "ceker",
    host: "127.0.0.1",
    port: 5433,
    dialect: "postgres"

})
export default db;