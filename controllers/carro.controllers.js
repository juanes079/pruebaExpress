import {
  getAllCars,
  createCar,
  findCarById,
  deleteAllCars,
  deleteCar,
  updateCars,
} from "../services/carro.services.js";

export async function obtenerCarros(req, res) {
  try {
    const carros = await getAllCars();
    res.status(200).json({
      message: `todos los carros fueron consultados correctamente`,
      cars: carros,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export async function crearCarro(req, res) {
  try {
    const carroData = req.body;
    const nuevoCarro = await createCar(carroData);
    res.status(201).json({
      message: `la peticion se ejecuto exitosamente`,
      car: nuevoCarro,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function buscarCarroId(req, res) {
  try {
    const carroEncontrado = await findCarById(req.params.id);
    res.status(200).json({
      message: `la peticion se ejecuto exitosamente`,
      car: carroEncontrado,
    });
  } catch (error) {
    res.status(500).json({
      message: `error al tratar de encontrar carro indicado con el id: ${req.params.id}`,
    });
  }
}

export async function eliminarCarros(req, res) {
  try {
    const carrosEliminados = await deleteAllCars();
    res.status(200).json({
      message: `todos los carros fueron eliminados correctamente`,
      cars: carrosEliminados,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function eliminarCarro(req, res) {
  try {
    const { id } = req.params;
    const carroEliminado = await deleteCar(id);
    res.status(200).json(carroEliminado);
  } catch (error) {
    res.status(500).json({
      message: `error al tratar eliminar el carro de la base de datos ${error.message}`,
    });
  }
}

export async function actualizarCarro(req, res) {
  try {
    const { id } = req.params;
    const carData = {
      marca: req.body.marca,
      placa: req.body.placa,
      año: req.body.año,
    };
    const saveCar = await updateCars(id, carData);
    res.status(200).json(saveCar);
  } catch (error) {
    res.status(500).json({
      message: `error al tratar de actualizar el carro ${error.message}`,
    });
  }
}
