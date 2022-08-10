import { Router } from "express";
import peliculasRoutes from "./movies.routes.js";
import generoRoutes from "./genre.routes.js";
import personajesRoutes from "./characters.routes.js";
// import authRoutes from "./auth.routes.js";

const router = Router();
router.use("/characters", personajesRoutes);
router.use("/genero", generoRoutes);
router.use("/movies", peliculasRoutes);
// router.use("/auth", authRoutes);

export default router;
