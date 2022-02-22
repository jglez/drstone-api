const express = require("express");
const Character = require("./character-model.js");

const server = express();

server.get("/api", (req, res) => res.json("This is exhilarating. Get excited!"));

server.get("/api/characters", (req, res) => {
  Character.getCharacters()
    .then(characters => {
      res.status(200).json(characters);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

server.get("/api/characters/:id", (req, res) => {
  const { id } = req.params;

  Character.getCharacterById(id)
    .then(char => {
      if (!char) {
        res.status(404).json(`Character with id ${id} not found`);
      } else {
        res.status(200).json(char);
      }
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = server;