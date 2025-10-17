import Usuario from "../models/Usuario.js";

/* servicio para obtener todos los usuarios */
export async function getUsuarios() {
  try {
    const usuarios = await Usuario.findAll();
    return usuarios;
  } catch (error) {
    throw new Error("Error al obtener los usuarios: " + error.message);
  }
}