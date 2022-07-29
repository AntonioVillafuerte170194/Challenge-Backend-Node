import express from "express";
import peliculasRoutes from "./routes/movies.routes.js";
import generoRoutes from "./routes/genre.routes.js";
import personajesRoutes from "./routes/characters.routes.js";
// import peliculas_personajes from "./models/peliculas_personajes.js";

const app = express();
app.use(express.json()); //middlewares
app.use(peliculasRoutes);
app.use(generoRoutes);
app.use(personajesRoutes);
// app.use(peliculas_personajes);
export default app;
