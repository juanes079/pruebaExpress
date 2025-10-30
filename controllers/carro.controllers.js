import {
  getAllCars,
  createCar,
  findCarById,
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

      car: carroEncontrado
    });
  } catch (error) {
     res.status(500).json({
      message: `error al tratar de encontrar carro indicado con el id: ${req.params.id}`,
    });
  }
}
