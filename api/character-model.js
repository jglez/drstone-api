const characters = require("../data/characters.js");

function getCharacters() {
    return Promise.resolve(characters);
}

module.exports = {
  getCharacters
};