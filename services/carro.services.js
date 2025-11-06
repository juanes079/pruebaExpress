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
    if (!findCar) {
      return {
        message: `el carro con el id ${idCar} no existe `,
      };
    }

    return findCar;
  } catch (error) {
    throw new Error("Error al buscar el carro por el Id " + error.message);
  }
}



export async function deleteAllCars() {
  try {
    const carsDelete = await carroModel.deleteMany();
    return {
      message: " todos los carros fueron eliminados de la base de datos ",
      carsDelete,
    };
  } catch (error) {
    throw new Error(
      "Error al eliminar los carros de la base de datos " + error.message
    );
  }
}

export async function deleteCar(idCar) {
  try {
    const onerCar = carroModel.findById(idCar);
    if (!onerCar) {
      return `el carro  con el  id:${idCar} no existente`;
    }
    const carDelete = await carroModel.deleteOne(onerCar);
    return `el carro con el id : ${idCar} fue eliminado ${carDelete}exitosamente`;
  } catch (error) {
    throw new Error(
      "Error al eliminar el carro de la base de datos " + error.message
    );
  }
}

export async function updateCars(idCar, carData) {
  try {
    const carUpDate = await carroModel.findById(idCar);
    if (carUpDate) {
      carUpDate.marca = carData.marca || carUpDate.marca;
      
      carUpDate.año = carData.año || carUpDate.año;

      carUpDate.placa = carData.placa || carUpDate.placa;
      await carUpDate.save();
      return `el carro: ${carUpDate} se actualizo`
    }
    return `el carro con el id:${idCar} no existe en la base de datos `
  } catch (error) {
    throw new Error(
      "Error al actualizar el carro en la base de datos " + error.message
    );
  }
}