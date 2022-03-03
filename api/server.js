const express = require("express");
const charactersRouter = require("./characters/characters-router.js");
const episodesRouter = require("./episodes/episodes-router.js")

const server = express();

server.get("/api", (req, res) => res.json("Welcome to the Dr. Stone API. This is exhilarating - get excited!"));
server.use("/api/characters", charactersRouter);
server.use("/api/episodes", episodesRouter);

server.use("*", (req, res) => { // catch-all
  res.status(404).send(`
    <h1>Dr. Stone API</h1>
    <p>Oops, we can't find what you're looking for!</p>
  `)
})

module.exports = server;