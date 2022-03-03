const episodes = require("../../data/episodes.js");

function getEpisodes() {
  return Promise.resolve(episodes);
}

function getEpisodeById(id) {
  const episode = episodes.find(episode => episode.id == id);
  return Promise.resolve(episode);
}

module.exports = {
  getEpisodes,
  getEpisodeById
};