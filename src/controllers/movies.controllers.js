import { genero } from "../models/genre.js";
import { peliculas } from "../models/movies.js";

export const getAllPeliculas = async (req, res) => {
  //   res.send("getting peliculas");
  const allPeliculas = await peliculas.findAll();
  res.json(allPeliculas);
};
export const getPeliculas = async (req, res) => {
  //   res.send("getting peliculas");
  const { id } = req.params;
  const generoPeliculas = await peliculas.findAll({
    where: { id },
    include: [genero],
  });
  res.json(generoPeliculas);
};
export const createPeliculas = async (req, res) => {
  const { titulo, image, fechaDeEstreno, GeneroId } = req.body;
  const newPelicula = await peliculas.create({
    image,
    titulo,
    fechaDeEstreno,
    GeneroId,
  });
  res.json(newPelicula);
  console.log(req.body);
  console.log(newPelicula);
};
export const deletePeliculas = async (req, res) => {
  const { id } = req.params;
  await peliculas.destroy({
    where: { id },
  });
  res.json({ mensaje: "pelicula eliminada" });
};
export const updatePeliculas = async (req, res) => {
  const { id } = req.params;
  const { image, titulo, fechaDeEstreno, calificacion } = req.body;
  const newPelicula = await peliculas.findByPk(id);
  (newPelicula.image = image),
    (newPelicula.titulo = titulo),
    (newPelicula.fechaDeEstreno = fechaDeEstreno),
    (newPelicula.calificacion = calificacion),
    await newPelicula.save();
  res.json(newPelicula);
};
