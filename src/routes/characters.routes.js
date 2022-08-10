import { Router } from "express";
import {
  createPersonajes,
  deletePersonajes,
  getAllPersonajes,
  getPersonaje,
  updatePersonajes,
} from "../controllers/characters.controllers.js";
import { verifyToken } from "../controllers/auth.controllers.js";

const router = Router();
router.get("/", verifyToken, getPersonaje);
router.get("/", verifyToken, getAllPersonajes);
router.post("/", verifyToken, createPersonajes);
router.delete("/:id", verifyToken, deletePersonajes);
router.put("/:id", verifyToken, updatePersonajes);
// router.get("/personajes/:id");
// router.get("/personajes/:id/peliculas");

export default router;
