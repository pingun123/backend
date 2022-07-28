const Loker from "../models/lokerModel.js";
const csv = require("fast-csv");
const fs = require("fs");

export const getAllLoker = async(req, res) => {
    try {
        const lokers = await Loker.findAll();
        const csvStream = csv.format({
            headers: true,
        });

        if (!fs.existsSync("/public/files/export")) {
            if (!fs.existsSync("/public/files")) {
                fs.mkdirSync("/public/files")
            }
            if (!fs.existsSync("/public/files/export")) {
                fs.mkdirSync("/public/files/export")
            }
        }

        const writeTableStream = fs.createWriteStream(
            "/public/files/export/lokers.csv"
        );

        csvStream.pipe(writeTableStream);
        writeTableStream.on('finish', () => {
            res.json({
                downloadUrl: '/files/export/lokers.csv'
            })
        })
        if (lokers.length > 0) {
            lokers.map(loker => {
                csvStream.write({
                    NamaPerusahaan: lokers.nama_perusahaan ? loker.nama_perusahaan : "-",
                    TentangPerusahaan: lokers.tentang_perusahaan ? loker.tentang_perusahaan : "-",
                    PosisiTersedia: lokers.posisi_tersedia ? loker.posisi_tersedia : "-",
                    Requirement: lokers.requirement ? loker.requirement : "-",
                    Sallary: lokers.sallary ? loker.sallary : "-",
                    LokasiPenempatan: lokers.lokasi_penempatan ? loker.lokasi_penempatan : "-",
                })
            });
        }

        csvStream.end();
        writeTableStream.end();


        res.json(lokers);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const createLoker = async(req, res) => {
    try {
        await Loker.create(req.body);
        res.json({
            "message": "Lokers Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getLokerById = async(req, res) => {
    try {
        const loker = await Loker.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(loker[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updateLoker = async(req, res) => {
    try {
        await Loker.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Lokers Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const deleteLoker = async(req, res) => {

    try {
        await Loker.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Lokers Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}