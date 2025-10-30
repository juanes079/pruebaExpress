import carroModel from "../models/Carro.js";

export async function getAllCars() {
  try {
    const allCars = await carroModel.find();
    return allCars;
  } catch (error) {
    throw new Error(`Error al obtener los carros: ${error.message}`);
  }
}

export async function createCar(carroGuardar) {
  const { marca, año, placa } = carroGuardar;
  try {
    const carroExiste = await carroModel.findOne({ placa });
    if (carroExiste) {
      return {
        message: `ya existe este carro con esta placa: ${placa}`,
      };
    }
    const newCar = carroModel.create({ marca, año, placa });
    return newCar;
  } catch (error) {
    throw new Error("Error al crear nuevo carro " + error.message);
  }
}
export async function findCarById(idCar) {
  try {
    const findCar = await carroModel.findById(idCar);
    if (!findCar){
        return {
            message: `el carro con el id ${idCar} no existe `
        }
    }

    return findCar;
  } catch (error) { throw new Error("Error al buscar el carro por el Id " + error.message);}
}
