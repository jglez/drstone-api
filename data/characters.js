const baseUrl = require("../utils/baseUrl.js");
const paths = require("../utils/paths.js");

const characters = [
  {
    id: 1,
    name: "Senku Ishigami",
    sex: "male",
    image: `${baseUrl}${paths.characters}/1/avatar`,
    firstAppearance: "Stone World",
    affiliation: {
      formerly: null,
      current: "Kingdom of Science"
    },
    occupation: ["Chief of Ishigami Village", "Scientist", "Leader of Kingdom of Science"]
  },
  {
    id: 2,
    name: "Taiju Oki",
    sex: "male",
    image: `${baseUrl}${paths.characters}/2/avatar`,
    firstAppearance: "Stone World",
    affiliation: {
      former: null,
      current: "Kingdom of Science" 
    },
    occupation: ["Laborer", "Spy for Kingdom of Science"]
  },
  {
    id: 3,
    name: "Yuzuriha Ogawa",
    sex: "female",
    image: `${baseUrl}${paths.characters}/3/avatar`,
    firstAppearance: "Stone World",
    affiliation: {
      formerly: null,
      current: "Kingdom of Science"
    },
    occupation: ["Tailor", "Spy for Kingdom of Science"]
  },
  {
    id: 4,
    name: "Tsukasa Shishio",
    sex: "male",
    image: `${baseUrl}${paths.characters}/4/avatar`,
    firstAppearance: "King of the Stone World",
    affiliation: {
      formerly: "Tsukasa Empire",
      current: "Kingdom of Science",
    },
    occupation: ["Warrior", "Leader of the Tsukasa Empire (formerly)"]
  },
  {
    id: 5,
    name: "Kohaku",
    sex: "female",
    image: `${baseUrl}${paths.characters}/5/avatar`,
    firstAppearance: "Two Nations of the Stone World",
    affiliation: {
      formerly: "Ishigami Village",
      current: "Kingdom of Science",
    },
    occupation: ["Warrior"]
  },
  {
    id: 6,
    name: "Chrome",
    sex: "male",
    image: `${baseUrl}${paths.characters}/6/avatar`,
    firstAppearance: "Where Two Million Years Have Gone",
    affiliation: {
      formerly: "Ishigami Village",
      current: "Kingdom of Science",
    },
    occupation: ["Scientist"]
  },
  {
    id: 7,
    name: "Ginro",
    sex: "male",
    image: `${baseUrl}${paths.characters}/7/avatar`,
    firstAppearance: "Where Two Million Years Have Gone",
    affiliation: {
      formerly: "Ishigami Village",
      current: "Kingdom of Science",
    },
    occupation: ["Ishigami Village Guard", "Warrior"]
  },
  {
    id: 8,
    name: "Kinro",
    sex: "male",
    image: `${baseUrl}${paths.characters}/8/avatar`,
    firstAppearance: "Where Two Million Years Have Gone",
    affiliation: {
      formerly: "Ishigami Village",
      current: "Kingdom of Science",
    },
    occupation: ["Ishigami Village Guard", "Warrior"]
  },
  {
    id: 9,
    name: "Suika",
    sex: "female",
    image: `${baseUrl}${paths.characters}/9/avatar`,
    firstAppearance: "Stone Road",
    affiliation: {
      formerly: "Ishigami Village",
      current: "Kingdom of Science",
    },
    occupation: ["Information Scout"]
  },
  {
    id: 10,
    name: "Kaseki",
    sex: "male",
    image: `${baseUrl}${paths.characters}/10/avatar`,
    firstAppearance: "Clear World",
    affiliation: {
      formerly: "Ishigami Village",
      current: "Kingdom of Science",
    },
    occupation: ["Artisan"]
  },
  {
    id: 11,
    name: "Gen Asagiri",
    sex: "male",
    image: `${baseUrl}${paths.characters}/11/avatar`,
    firstAppearance: "Let There Be the Light of Science",
    affiliation: {
      formerly: "Tsukasa Empire",
      current: "Kingdom of Science"
    },
    occupation: ["Mentalist"]
  },
  {
    id: 12,
    name: "Ruri",
    sex: "female",
    image: `${baseUrl}${paths.characters}/12/avatar`,
    firstAppearance: "Where Two Million Years Have Gone",
    affiliation: {
      formerly: "Ishigami Village",
      current: "Kingdom of Science"
    },
    occupation: "Priestess"
  },
  {
    id: 13,
    name: "Magma",
    sex: "male",
    image: `${baseUrl}${paths.characters}/13/avatar`,
    firstAppearance: "Where Two Million Years Have Gone",
    affiliation: {
      formerly: "Ishigami Village",
      current: "Kingdom of Science"
    },
    occupation: ["Warrior"]
  },
  {
    id: 14,
    name: "Byakuya Ishigami",
    sex: "male",
    image: `${baseUrl}${paths.characters}/14/avatar`,
    firstAppearance: "A Tale for the Ages",
    affiliation: {
      formerly: null,
      current: "ISS Astronauts"
    },
    occupation: ["JAXA Astronaut", "Teacher (formerly)"]
  }
];

module.exports = characters;
