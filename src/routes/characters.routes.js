import { Router } from "express";
import {
  createPersonajes,
  deletePersonajes,
  getAllPersonajes,
  getPersonaje,
  updatePersonajes,
} from "../controllers/characters.controllers.js";
const router = Router();
router.get("/characters", getPersonaje);
router.get("/characters", getAllPersonajes);
router.post("/characters", createPersonajes);
router.delete("/characters/:id", deletePersonajes);
router.put("/characters/:id", updatePersonajes);
// router.get("/personajes/:id");
// router.get("/personajes/:id/peliculas");

export default router;
