const { Sequelize }
from "sequelize";
const db from "../config/config.js";

const { DataTypes } = Sequelize;

const Loker = db.define('lokers', {
    nama_perusahaan: {
        type: DataTypes.STRING
    },
    tentang_perusahaan: {
        type: DataTypes.STRING
    },
    posisi_tersedia: {
        type: DataTypes.STRING
    },
    requirement: {
        type: DataTypes.STRING
    },
    sallary: {
        type: DataTypes.INTEGER
    },
    lokasi_penempatan: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
})

export default Loker;