import { Router } from "express";
import {
  createPeliculas,
  getPeliculas,
  getAllPeliculas,
  updatePeliculas,
  deletePeliculas,
} from "../controllers/movies.controllers.js";

const router = Router();

router.get("/movies", getAllPeliculas);
router.post("/movies", createPeliculas);
router.delete("/movies/:id", deletePeliculas);
router.put("/movies/:id", updatePeliculas);
router.get("/movies/:id", getPeliculas);

export default router;
