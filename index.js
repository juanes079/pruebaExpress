console.log("Hola Mundo");

import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/config.js";
import apiRouterGateway from "./routes/api.router.gateway.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(apiRouterGateway);

app.get("/", (req, res) => {
  res.send("Hola Mundo");
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
