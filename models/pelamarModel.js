const { Sequelize }
from "sequelize";
const db from "../config/config.js";

const { DataTypes } = Sequelize;

const Pelamar = db.define('pelamars', {
    nama_lengkap: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    apply_role: {
        type: DataTypes.STRING
    },
    url_linkedin: {
        type: DataTypes.STRING
    },
    link_cv: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
})

export default Pelamar;