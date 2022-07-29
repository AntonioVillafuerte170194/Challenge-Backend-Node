import { Router } from "express";
import {
  createGenero,
  deleteGenero,
  getGenero,
  getGeneroPeliculas,
} from "../controllers/genre.controllers.js";
const router = Router();

router.get("/genero", getGenero);
router.post("/genero", createGenero);
router.delete("/genero/:id", deleteGenero);
router.put("/genero/:id");
router.get("/genero/:id");
router.get("/genero/:id/peliculas", getGeneroPeliculas);

export default router;
