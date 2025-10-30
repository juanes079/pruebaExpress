import { Schema, model } from "mongoose";
const carroSchema = Schema(
  {
    marca: {
      type: String,
      required: true,
    },
    año: {
      type: Number,
      required: true,
    },

    placa: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export default model("Carro", carroSchema);