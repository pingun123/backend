const Pelamar from "../models/pelamarModel.js";

export const getAllPelamar = async(req, res) => {
    try {
        const pelamars = await Pelamar.findAll();
        res.json(pelamars);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const createPelamar = async(req, res) => {
    try {
        await Pelamar.create(req.body);
        res.json({
            "message": "Pelamars Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getPelamarById = async(req, res) => {
    try {
        const pelamar = await Pelamar.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(pelamar[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updatePelamar = async(req, res) => {
    try {
        await Pelamar.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Pelamars Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const deletePelamar = async(req, res) => {

    try {
        await Pelamar.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Pelamars Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}