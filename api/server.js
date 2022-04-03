const express = require("express");
const cors = require("cors");
const path = require("path");
const charactersRouter = require("./characters/characters-router.js");
const episodesRouter = require("./episodes/episodes-router.js")

const server = express();
server.use(cors({origin: "*", methods: ["GET"]}));
server.use(express.static(path.join(__dirname, "../client/build")));

server.get("/api", (req, res) => res.json({
  characters: "https://drstone-api.herokuapp.com/api/characters",
  episodes: "https://drstone-api.herokuapp.com/api/episodes",
}));

server.use("/api/characters", charactersRouter);
server.use("/api/episodes", episodesRouter);

server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = server;
