const express = require("express");
const path = require("path");
const charactersRouter = require("./characters/characters-router.js");
const episodesRouter = require("./episodes/episodes-router.js")

const server = express();
server.use(express.static(path.join(__dirname, "../client/build")));

server.get("/api", (req, res) => res.json("Welcome to the Dr. Stone API. This is exhilarating - get excited!"));
server.use("/api/characters", charactersRouter);
server.use("/api/episodes", episodesRouter);

server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = server;