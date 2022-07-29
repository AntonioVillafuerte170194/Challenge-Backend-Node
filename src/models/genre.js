import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
import { peliculas } from "./movies.js";

export const genero = sequelize.define("Genero", {
  id: {
    type: DataTypes.INTEGER, //numero entero
    primaryKey: true, //no debe repetirse
    autoIncrement: true, //incrementarse solo
  },
  name: { type: DataTypes.STRING },
  image: { type: DataTypes.STRING },
});
genero.hasMany(peliculas, {
  foreingKey: "GeneroId",
  sourceKey: "id",
});
peliculas.belongsTo(genero, {
  foreingKey: "GeneroId",
  targetId: "id",
});

// Género: deberá tener,
// ○ Nombre.
// ○ Imagen.
// ○ Películas o series asociadas.
