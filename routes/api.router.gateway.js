import express from "express"
const router = express.Router()
router.use("/api-users", (req, res) => res.send("API Gateway v1"))


export default router