const express = require("express");
const Episode = require("./episodes-model.js");
const characterRouter = require("./characters/character-router.js");

const server = express();

server.get("/api", (req, res) => res.json("Welcome to the Dr. Stone API. This is exhilarating. Get excited!"));

server.use("/api/characters", characterRouter);

/* Episodes Endpoints */
server.get("/api/episodes", (req, res) => {
  Episode.getEpisodes()
    .then(episodes => {
      res.status(200).json(episodes);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    })
});

module.exports = server;