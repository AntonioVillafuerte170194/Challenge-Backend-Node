import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
// import { characters } from "./characters.js";
// import { peliculas_personajes } from "./peliculas_personajes.js";

export const peliculas = sequelize.define("movies", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  image: { type: DataTypes.STRING },
  titulo: { type: DataTypes.STRING },
  fechaDeEstreno: { type: DataTypes.STRING },
  calificacion: { type: DataTypes.STRING },
});
// peliculas.belongsToMany(characters, { through: "Peliculas_Personaje" });
// personajes.belongsToMany(peliculas, { through: "Peliculas_Personaje" });

// peliculas.belongsToMany(personajes, {
//   through: peliculas_personajes,
//   foreignKey: "peliculasId",
//   otherKey: "personajesId",
// });

// Película o Serie: deberá tener,
// ○ Imagen.
// ○ Título.
// ○ Fecha de creación.
// ○ Calificación (del 1 al 5).
// ○ Personajes asociados.
