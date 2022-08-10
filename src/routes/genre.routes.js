import { Router } from "express";
import { verifyToken } from "../controllers/auth.controllers.js";
import {
  createGenero,
  deleteGenero,
  getGenero,
  getGeneroPeliculas,
} from "../controllers/genre.controllers.js";
const router = Router();

router.get("/", verifyToken, getGenero);
router.post("/", verifyToken, createGenero);
router.delete("/:id", verifyToken, deleteGenero);
router.put("/:id", verifyToken);
router.get("/:id", verifyToken);
router.get("/:id/peliculas", verifyToken, getGeneroPeliculas);

export default router;
