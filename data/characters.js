const baseUrl = require("../utils/baseUrl.js");
const paths = require("../utils/paths.js");

const characters = [
  {
    id: 1,
    name: "Senku Ishigami",
    sex: "male",
    image: `${baseUrl}${paths.characters}/1/avatar`,
    firstAppearance: "Stone World"
  },
  {
    id: 2,
    name: "Taiju Oki",
    sex: "male",
    image: `${baseUrl}${paths.characters}/2/avatar`,
    firstAppearance: "Stone World"
  },
  {
    id: 3,
    name: "Yuzuriha Ogawa",
    sex: "female",
    image: `${baseUrl}${paths.characters}/3/avatar`,
    firstAppearance: "Stone World"
  },
  {
    id: 4,
    name: "Tsukasa Shishio",
    sex: "male",
    image: `${baseUrl}${paths.characters}/4/avatar`,
    firstAppearance: "King of the Stone World"
  },
  {
    id: 5,
    name: "Kohaku",
    sex: "female",
    image: `${baseUrl}${paths.characters}/5/avatar`,
    firstAppearance: "Two Nations of the Stone World"
  },
  {
    id: 6,
    name: "Chrome",
    sex: "male",
    image: `${baseUrl}${paths.characters}/6/avatar`,
    firstAppearance: "Where Two Million Years Have Gone"
  },
  {
    id: 7,
    name: "Ginro",
    sex: "male",
    image: `${baseUrl}${paths.characters}/7/avatar`,
    firstAppearance: "Where Two Million Years Have Gone"
  },
  {
    id: 8,
    name: "Kinro",
    sex: "male",
    image: `${baseUrl}${paths.characters}/8/avatar`,
    firstAppearance: "Where Two Million Years Have Gone"
  },
  {
    id: 9,
    name: "Suika",
    sex: "female",
    image: `${baseUrl}${paths.characters}/9/avatar`,
    firstAppearance: "Stone Road"
  },
  {
    id: 10,
    name: "Kaseki",
    sex: "male",
    image: `${baseUrl}${paths.characters}/10/avatar`,
    firstAppearance: "Clear World"
  },
  {
    id: 11,
    name: "Gen Asagiri",
    sex: "male",
    image: `${baseUrl}${paths.characters}/11/avatar`,
    firstAppearance: "Let There Be the Light of Science"
  }
];

module.exports = characters;
