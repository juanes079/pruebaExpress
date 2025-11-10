import {
  getUsuarios,
  createUsuario,
  buscarUsuario,
  deleteUsers,
  deleteOner,
  updateUser,
  logIn,
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

export async function usersDelete1(req, res) {
  try {
    const usuariosEliminados = await deleteUsers();
    res.status(200).json(usuariosEliminados);
  } catch (error) {
    res.status(500).json({
      message: `error al tratar eliminar los usuarios de la base de datos ${error.message}`,
    });
  }
}

export async function eliminarUsuario(req, res) {
  try {
    const { id } = req.params;
    const usuarioEliminado = await deleteOner(id);
    res.status(200).json(usuarioEliminado);
  } catch (error) {
    res.status(500).json({
      message: `error al tratar eliminar el usuario de la base de datos ${error.message}`,
    });
  }
}
export async function actualizarUsuario(req, res) {
  try {
    const { id } = req.params;
    const usuarioData = {
      email: req.body.email,
      password: req.body.password,
    };
    const saveUser = await updateUser(id, usuarioData);
    res.status(200).json(saveUser);
    
  } catch (error) {res.status(500).json({
      message: `error al tratar de actualizar el usuario ${error.message}`,
    });}
}


export async function logInUser(req, res){
  try {
      const userData = req.body;
      const saveToken = await logIn(userData);
      res.status(200).json({
        message:"token asignado",
        token:saveToken
      });
  } catch (error) {res.status(500).json({
      message: `error al tratar de entrar al sistema ${error.message}`,
    });
    
  }
}