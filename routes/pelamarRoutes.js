const express from "express";
const {
    getAllPelamar,
    getPelamarById,
    createPelamar,
    updatePelamar,
    deletePelamar,
}
from "../controllers/pelamarController.js";

const router = express.Router();

// Pelamars 
router.get('/', getAllPelamar);
router.get('/:id', getPelamarById);
router.post('/', createPelamar);
router.patch('/:id', updatePelamar);
router.delete('/:id', deletePelamar);


export default router;