const express from "express";
const {
    getAllLoker,
    getLokerById,
    createLoker,
    updateLoker,
    deleteLoker,
}
from "../controllers/lokerController.js";

const router = express.Router();

// Lokers 
router.get('/', getAllLoker);
router.get('/:id', getLokerById);
router.post('/', createLoker);
router.patch('/:id', updateLoker);
router.delete('/:id', deleteLoker);

export default router;