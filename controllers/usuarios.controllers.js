import {
  getUsuarios,
  createUsuario,
  buscarUsuario,
} from "../services/usuarios.services.js";

export async function obtenerUsuarios(req, res) {
  try {
    const usuarios = await getUsuarios();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function createUsuarioControllers(req, res) {
  try {
    const usuarioData = req.body;
    const newUsuario = await createUsuario(usuarioData);
    res.status(201).json(newUsuario);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function buscarUsuarioIdController(req, res) {
  try {
    const usuarioEncontrado = await buscarUsuario(req.params.id);
    res.status(200).json(usuarioEncontrado);
  } catch (error) {
    res.status(500).json({
        message: `error al tratar de encontrar usuario indicado con el id: ${req.params.id}`,
      });
  }
}
