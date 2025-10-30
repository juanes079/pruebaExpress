import express from "express"
import usersRouter from "./usuario.routes.js"
import carrosRouter from "./carro.routes.js"
const router = express.Router()
router.use("/api-users", usersRouter)
router.use("/api-cars", carrosRouter)



export default router