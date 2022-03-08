const episodes = [
  {
    id: 1,
    name: "Stone World",
    episode: "S01E01",
    japanese_air_date: "July 5, 2019",
    english_air_date: "July 19, 2019"
  },
  {
    id: 2,
    name: "King of the Stone World",
    episode: "S01E02",
    japanese_air_date: "July 12, 2019",
    english_air_date: "July 26, 2019"
  },
  {
    id: 3,
    name: "Weapons of Science",
    episode: "S01E03",
    japanese_air_date: "July 19, 2019",
    english_air_date: "August 2, 2019"
  },
  {
    id: 4,
    name: "Fire the Smoke Signal",
    episode: "S01E04",
    japanese_air_date: "July 26, 2019",
    english_air_date: "August 9, 2019"
  },
  {
    id: 5,
    name: "Stone World The Beginning",
    episode: "S01E05",
    japanese_air_date: "August 2, 2019",
    english_air_date: "August 16, 2019"
  },
  {
    id: 6,
    name: "Two Nations of the Stone World",
    episode: "S01E06",
    japanese_air_date: "August 9, 2019",
    english_air_date: "August 23, 2019"
  },
  {
    id: 7,
    name: "Where Two Million Years Have Gone",
    episode: "S01E07",
    japanese_air_date: "August 16, 2019",
    english_air_date: "August 30, 2019"
  },
  {
    id: 8,
    name: "Stone Road",
    episode: "S01E08",
    japanese_air_date: "August 23, 2019",
    english_air_date: "September 6, 2019"
  },
  {
    id: 9,
    name: "Let There Be the Light of Science",
    episode: "S01E09",
    japanese_air_date: "August 30, 2019",
    english_air_date: "September 13, 2019"
  },
  {
    id: 10,
    name: "A Flimsy Alliance",
    episode: "S01E10",
    japanese_air_date: "September 6, 2019",
    english_air_date: "September 20, 2019"
  },
  {
    id: 11,
    name: "Clear World",
    episode: "S01E11",
    japanese_air_date: "September 13, 2019",
    english_air_date: "September 27, 2019"
  },
  {
    id: 12,
    name: "Buddies Back to Back",
    episode: "S01E12",
    japanese_air_date: "September 20, 2019",
    english_air_date: "October 4, 2019"
  },
  {
    id: 13,
    name: "Masked Warrior",
    episode: "S01E13",
    japanese_air_date: "September 27, 2019",
    english_air_date: "October 11, 2019"
  },
  {
    id: 14,
    name: "Master of Flame",
    episode: "S01E14",
    japanese_air_date: "October 4, 2019",
    english_air_date: "October 18, 2019"
  },
  {
    id: 15,
    name: "The Culmination of Two Million Years",
    episode: "S01E15",
    japanese_air_date: "October 11, 2019",
    english_air_date: "October 25, 2019"
  },
  {
    id: 16,
    name: "A Tale for the Ages",
    episode: "S01E16",
    japanese_air_date: "October 18, 2019",
    english_air_date: "November 1, 2019"
  },
  {
    id: 17,
    name: "A Hundred Nights and a Thousand Skies",
    episode: "S01E17",
    japanese_air_date: "October 25, 2019",
    english_air_date: "November 8, 2019"
  },
  {
    id: 18,
    name: "Stone Wars",
    episode: "S01E18",
    japanese_air_date: "November 1, 2019",
    english_air_date: "November 15, 2019"
  },
  {
    id: 19,
    name: "To Modernity",
    episode: "S01E19",
    japanese_air_date: "November 8, 2019",
    english_air_date: "November 22, 2019"
  },
  {
    id: 20,
    name: "The Age of Energy",
    episode: "S01E20",
    japanese_air_date: "November 15, 2019",
    english_air_date: "December 6, 2019"
  },
  {
    id: 21,
    name: "Spartan Crafts Clubs",
    episode: "S01E21",
    japanese_air_date: "November 22, 2019",
    english_air_date: "December 6, 2019"
  },
  {
    id: 22,
    name: "The Treasure",
    episode: "S01E22",
    japanese_air_date: "November 29, 2019",
    english_air_date: "December 13, 2019"
  },
  {
    id: 23,
    name: "Wave of Science",
    episode: "S01E23",
    japanese_air_date: "December 6, 2019",
    english_air_date: "December 20, 2019"
  },
  {
    id: 24,
    name: "Voices Over Infinite Distance",
    episode: "S01E24",
    japanese_air_date: "December 13, 2019",
    english_air_date: "January 3, 2020"
  },
  {
    id: 25,
    name: "Stone Wars Beginning",
    episode: "S02E01",
    japanese_air_date: "January 14, 2021",
    english_air_date: "February 11, 2021"
  },
  {
    id: 26,
    name: "Hot Line",
    episode: "S02E02",
    japanese_air_date: "January 21, 2021",
    english_air_date: "February 18, 2021"
  },
  {
    id: 27,
    name: "Call from the Dead",
    episode: "S02E03",
    japanese_air_date: "January 28, 2021",
    english_air_date: "March 11, 2021"
  },
  {
    id: 28,
    name: "Full Assault",
    episode: "S02E04",
    japanese_air_date: "February 4, 2021",
    english_air_date: "March 18, 2021"
  },
  {
    id: 29,
    name: "Steam Gorilla",
    episode: "S02E05",
    japanese_air_date: "February 11, 2021",
    english_air_date: "April 1, 2021"
  },
  {
    id: 30,
    name: "Prison Break",
    episode: "S02E06",
    japanese_air_date: "February 18, 2021",
    english_air_date: "April 8, 2021"
  },
  {
    id: 31,
    name: "Secret Mission",
    episode: "S02E07",
    japanese_air_date: "February 25, 2021",
    english_air_date: "April 22, 2021"
  },
  {
    id: 32,
    name: "Final Battle",
    episode: "S02E08",
    japanese_air_date: "March 4, 2021",
    english_air_date: "April 29, 2021"
  },
  {
    id: 33,
    name: "To Destroy and to Save",
    episode: "S02E09",
    japanese_air_date: "March 11, 2021",
    english_air_date: "May 6, 2021"
  },
  {
    id: 34,
    name: "Humanity's Strongest Tag Team",
    episode: "S02E10",
    japanese_air_date: "March 18, 2021",
    english_air_date: "May 27, 2021"
  },
  {
    id: 35,
    name: "Prologue of Dr. Stone",
    episode: "S02E11",
    japanese_air_date: "March 25, 2021",
    english_air_date: "June 3, 2021"
  }
]

module.exports = episodes;