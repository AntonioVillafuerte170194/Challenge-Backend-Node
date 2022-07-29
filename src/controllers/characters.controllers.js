import { characters } from "../models/characters.js";

export const getAllPersonajes = async (req, res) => {
  //   res.send("getting peliculas");
  const AllPersonajes = await characters.findAll();
  res.json(AllPersonajes);
};
export const createPersonajes = async (req, res) => {
  const { image, name, edad, peso, historia } = req.body;
  const newPersonajes = await characters.create({
    image,
    name,
    edad,
    peso,
    historia,
  });
  res.json(newPersonajes);
};
export const deletePersonajes = async (req, res) => {
  const { id } = req.params;
  await characters.destroy({
    where: { id },
  });
  res.json({ mensaje: "personaje eliminado" });
};
export const updatePersonajes = async (req, res) => {
  const { id } = req.params;
  const { image, name, edad, peso, historia } = req.body;
  const newPersonajes = await characters.findByPk(id);
  (newPersonajes.image = image),
    (newPersonajes.name = name),
    (newPersonajes.edad = edad),
    (newPersonajes.peso = peso),
    (newPersonajes.historia = historia);
  await newPersonajes.save();
  res.json(newPersonajes);
};
export const getPersonaje = async (req, res) => {
  const { name, edad } = req.query;
  if (name) {
    const personaje = await characters.findAll({
      where: { name },
    });
    res.json(personaje);
    console.log(personaje);
  }
  if (edad) {
    const personaje = await characters.findAll({
      where: { edad },
    });
    res.json(personaje);
    console.log(personaje);
  } else {
    res.send("there are no query parameters");
  }
};
