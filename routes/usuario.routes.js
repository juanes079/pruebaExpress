import express from "express";
const router = express.Router();
router.get("/get-users", (req, res) => res.send("Usuario route works!/get"));
router.get("/get-oner/:id", (req, res) => res.send("Usuario route works!/get-one"));
router.post("/create-users", (req, res) => res.send("Usuario route works!/post"));
router.delete("/delete-users", (req, res) => res.send("Usuario route works!/delete"));
router.delete("/delete-oner/:id", (req, res) => res.send("Usuario route works!/delete-one"));
router.patch("/update-oner/:id", (req, res) => res.send("Usuario route works!/patch"));

export default router;
