const express = require("express");
const characterRouter = require("./characters/character-router.js");
const episodeRouter = require("./episodes/episodes-router.js")

const server = express();

server.get("/api", (req, res) => res.json("Welcome to the Dr. Stone API. This is exhilarating. Get excited!"));

server.use("/api/characters", characterRouter);
server.use("/api/episodes", episodeRouter);


module.exports = server;