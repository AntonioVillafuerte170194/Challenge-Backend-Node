import { Router } from "express";
import {
  createPeliculas,
  getPeliculas,
  getAllPeliculas,
  updatePeliculas,
  deletePeliculas,
} from "../controllers/movies.controllers.js";

const router = Router();

router.get("/", getAllPeliculas);
router.post("/", createPeliculas);
router.delete("/:id", deletePeliculas);
router.put("/:id", updatePeliculas);
router.get("/:id", getPeliculas);

export default router;
