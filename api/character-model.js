const characters = require("../data/characters.js");

function getCharacters() {
    return Promise.resolve(characters);
}

function getCharacterById(id) {
  const character = characters.find(char => char.id == id);
  return Promise.resolve(character);
}

module.exports = {
  getCharacters,
  getCharacterById
};