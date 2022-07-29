import { Sequelize } from "sequelize";
// import { peliculas } from "../models/movies.js";
// import { characters } from "../models/characters.js";

export const sequelize = new Sequelize("postgres", "postgres", "guni", {
  host: "localhost",
  dialect: "postgres",
  port: "5433",
});

// peliculas.belongsToMany(characters, {
//   through: "Peliculas_Personaje",
//   as: "pelipers",
// });
// characters.belongsToMany(peliculas, {
//   through: "Peliculas_Personaje",
//   as: "pelipers",
// });
