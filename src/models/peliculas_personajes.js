import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
import { peliculas } from "./movies.js";
import { characters } from "./characters.js";

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

// peliculas.belongsToMany(characters, { through: "Peliculas_Personaje" });
// characters.belongsToMany(peliculas, { through: "Peliculas_Personaje" });

const Movie = sequelize.define("Movie", { name: DataTypes.STRING });
const Actor = sequelize.define("Actor", { name: DataTypes.STRING });
Movie.belongsToMany(Actor, { through: "ActorMovies" });
Actor.belongsToMany(Movie, { through: "ActorMovies" });
