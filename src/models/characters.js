import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
// import { peliculas } from "./movies";
// import { peliculas_personajes } from "./peliculas_personajes.js";

export const characters = sequelize.define("characters", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  image: { type: DataTypes.STRING },
  name: { type: DataTypes.STRING },
  edad: { type: DataTypes.STRING },
  peso: { type: DataTypes.STRING },
  historia: { type: DataTypes.STRING },
});
export const char = sequelize.define("charact", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  image: { type: DataTypes.STRING },
  name: { type: DataTypes.STRING },
  edad: { type: DataTypes.STRING },
  peso: { type: DataTypes.STRING },
  historia: { type: DataTypes.STRING },
});

const Movie = sequelize.define("Movie", { name: DataTypes.STRING });
const Actor = sequelize.define("Actor", { name: DataTypes.STRING });
Movie.belongsToMany(Actor, { through: "ActorMovies" });
Actor.belongsToMany(Movie, { through: "ActorMovies" });

// peliculas.belongsToMany(characters, { through: "Peliculas_Personaje" });
// characters.belongsToMany(peliculas, { through: "Peliculas_Personaje" });

// Personaje: deberá tener,
// ○ Imagen.
// ○ Nombre.
// ○ Edad.
// ○ Peso.
// ○ Historia.
// ○ Películas o series asociadas.
// export const peliculas_personajes = sequelize.define("Peliculas_Personajes", {
//   peliculasId: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: peliculas,
//       key: "id",
//     },
//   },
//   charactersId: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: characters,
//       key: "id",
//     },
//   },
// });
// peliculas.belongsToMany(characters, { through: peliculas_personajes });
// characters.belongsToMany(peliculas, { through: peliculas_personajes });
