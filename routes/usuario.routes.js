import express from "express";
import {obtenerUsuarios,createUsuarioControllers,buscarUsuarioIdController, usersDelete1, eliminarUsuario,actualizarUsuario} from "../controllers/usuarios.controllers.js";
const router = express.Router();
router.get("/get-users", obtenerUsuarios);
router.get("/get-oner/:id", buscarUsuarioIdController);
router.post("/create-users", createUsuarioControllers);
router.delete("/delete-users", usersDelete1);
router.delete("/delete-oner/:id",eliminarUsuario);
router.patch("/update-oner/:id",actualizarUsuario);

export default router;
