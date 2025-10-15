import express from "express"
import usersRouter from "./usuario.routes.js"
const router = express.Router()
router.use("/api-users", usersRouter)


export default router