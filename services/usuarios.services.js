import UsuarioModels from "../models/Usuario.js";

/* servicio para obtener todos los usuarios */
export async function getUsuarios() {
  try {
    const usuarios = await UsuarioModels.find();
    return usuarios;
  } catch (error) {
    throw new Error("Error al obtener los usuarios: " + error.message);
  }
}

export async function createUsuario(usuarioGuardar) {
  const { email, password } = usuarioGuardar;
  try {
    const usuarioExistente = await UsuarioModels.findOne({ email });
    if (usuarioExistente) {
      return `ya existe un usuario con el email: ${email}`;
    }
    const newUsuario = UsuarioModels.create({ email, password });
    return newUsuario;
  } catch (error) {
    throw new Error("Error al crear nuevo usuario " + error.message);
  }
}

export async function buscarUsuario(idUsuario) {
  try {
    const buscarUsuario = await UsuarioModels.findById(idUsuario);
    if (!buscarUsuario) {
      return `usuario  con el  id:${idUsuario} no existente`;
    }
    return buscarUsuario
  } catch (error) {
    throw new Error("Error al buscar por id usuario " + error.message);
  }
}
