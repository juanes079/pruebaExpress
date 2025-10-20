import express from "express";
import {obtenerUsuarios,createUsuarioControllers,buscarUsuarioIdController } from "../controllers/usuarios.controllers.js";
const router = express.Router();
router.get("/get-users", obtenerUsuarios);
router.get("/get-oner/:id", buscarUsuarioIdController);
router.post("/create-users", createUsuarioControllers);
router.delete("/delete-users", (req, res) => res.send("Usuario route works!/delete"));
router.delete("/delete-oner/:id", (req, res) => res.send("Usuario route works!/delete-one"));
router.patch("/update-oner/:id", (req, res) => res.send("Usuario route works!/patch"));

export default router;
