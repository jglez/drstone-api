const express = require("express");
const cors = require("cors");
const path = require("path");
const charactersRouter = require("./characters/characters-router.js");
const episodesRouter = require("./episodes/episodes-router.js");

const server = express();
const clientBuildPath = path.join(__dirname, "../client/build");
const defaultDevOrigins = new Set(["http://localhost:3000", "http://localhost:5173"]);
const configuredOrigins = [
  process.env.CLIENT_ORIGIN,
  process.env.BASE_URL,
  process.env.RENDER_EXTERNAL_URL,
  process.env.ALLOWED_ORIGINS
]
  .filter(Boolean)
  .flatMap((value) => value.split(","))
  .map((origin) => origin.trim().replace(/\/$/, ""))
  .filter(Boolean);
const allowedOrigins = new Set(configuredOrigins);

if (server.get("env") !== "production") {
  defaultDevOrigins.forEach((origin) => allowedOrigins.add(origin));
}

server.disable("x-powered-by");
server.use(
  cors({
    methods: ["GET"],
    origin(origin, callback) {
      if (!origin) {
        callback(null, true);
        return;
      }

      const normalizedOrigin = origin.replace(/\/$/, "");
      callback(null, allowedOrigins.has(normalizedOrigin));
    }
  })
);
server.use(express.static(clientBuildPath));

server.get("/api", (req, res) => 
  res.json({
    characters: "/api/characters",
    episodes: "/api/episodes"
  })
);

server.use("/api/characters", charactersRouter);
server.use("/api/episodes", episodesRouter);

server.get("*", (req, res) => {
  res.sendFile(path.join(clientBuildPath, "index.html"));
});

module.exports = server;
