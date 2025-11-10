import UsuarioModels from "../models/Usuario.js";
import bcrypt from "bcryptjs";
import generateToken from "../middlewares/jwtGenerate.js";

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
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const newUsuario = UsuarioModels.create({ email, password: hashPassword });
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
    return buscarUsuario;
  } catch (error) {
    throw new Error("Error al buscar por id usuario " + error.message);
  }
}

export async function deleteUsers() {
  try {
    const usersDelete = await UsuarioModels.deleteMany();
    return {
      message: " todos los usuarios eliminados de la base de datos ",
      usersDelete,
    };
  } catch (error) {
    throw new Error(
      "Error al eliminar los usuarios de la base de datos " + error.message
    );
  }
}

export async function deleteOner(idUsuario) {
  try {
    const onerUser = UsuarioModels.findById(idUsuario);
    if (!onerUser) {
      return `usuario  con el  id:${idUsuario} no existente`;
    }
    const userDelete = await UsuarioModels.deleteOne(onerUser);
    return `el usuario con el id : ${idUsuario} fue eliminado ${userDelete}exitosamente`;
  } catch (error) {
    throw new Error(
      "Error al eliminar el usuario de la base de datos " + error.message
    );
  }
}

export async function updateUser(idUsuario, usuarioData) {
  try {
    const userUpDate = await UsuarioModels.findById(idUsuario);
    if (userUpDate) {
      userUpDate.email = usuarioData.email || userUpDate.email;
      userUpDate.password = usuarioData.password || userUpDate.password;
      await userUpDate.save();
      return `el usuario: ${userUpDate} se actualizo`;
    }
    return `el usuario con el id:${idUsuario} no existe en la base de datos `;
  } catch (error) {
    throw new Error(
      "Error al actualizar el usuario en la base de datos " + error.message
    );
  }
}

export async function logIn(user) {
  const { email, password } = user;
  try {
    const usuarioExistente = await UsuarioModels.findOne({ email });
    if (!usuarioExistente) {
      return `no existen registros de usuarios con el email : ${email}  registrate`;
    };
    const validPassword = await bcrypt.compare(
      password,
      usuarioExistente.password
    );
    if (!validPassword) {
      return `credenciales invalidas `;
    }
    const tokenAssigned = generateToken({ email });
    return tokenAssigned;
  } catch (error) {
    throw new Error(
      "Error al ejecutar el logIn " + error.message
    );
  }
}
