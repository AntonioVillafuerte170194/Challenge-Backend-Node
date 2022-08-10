import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

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

const Movie = sequelize.define("Movie", { name: DataTypes.STRING });
const Actor = sequelize.define("Actor", { name: DataTypes.STRING });
Movie.belongsToMany(Actor, { through: "ActorMovies" });
Actor.belongsToMany(Movie, { through: "ActorMovies" });

// Personaje: deberá tener,
// ○ Imagen.
// ○ Nombre.
// ○ Edad.
// ○ Peso.
// ○ Historia.
// ○ Películas o series asociadas.
