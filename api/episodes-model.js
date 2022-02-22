const episodes = require("../data/episodes.js");

function getEpisodes() {
  return Promise.resolve(episodes);
}

module.exports = {
  getEpisodes
};