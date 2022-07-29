import { genero } from "../models/genre.js";
import { peliculas } from "../models/movies.js";

export const getGeneroPeliculas = async (req, res) => {
  const { id } = req.params;
  const generoPeliculas = await peliculas.findAll({
    where: { GeneroId: id },
    include: [genero],
  });
  res.json(generoPeliculas);
  console.log(req);
};
export const createGenero = async (req, res) => {
  const { name, image } = req.body;
  const newGenero = await genero.create({
    name,
    image,
  });
  res.json(newGenero);
};
export const getGenero = async (req, res) => {
  const allGeneros = await genero.findAll({});
  res.json(allGeneros);
};
export const deleteGenero = async (req, res) => {
  const { id } = req.params;
  await genero.destroy({
    where: { id },
  });
  res.json({ mensaje: "genero eliminado" });
};
