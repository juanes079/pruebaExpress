import express from "express";
import { obtenerCarros,crearCarro, buscarCarroId } from "../controllers/carro.controllers.js";
const router = express.Router();
router.get("/", obtenerCarros);
router.post("/createCar", crearCarro);
router.get("/:id", buscarCarroId);
export default router;