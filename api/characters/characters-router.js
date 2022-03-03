const router = require("express").Router();
const Character = require("./characters-model.js")

router.get("/", (req, res) => {
  Character.getCharacters()
    .then(characters => {
      res.status(200).json(characters);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Character.getCharacterById(id)
    .then(char => {
      if (!char) {
        res.status(404).json(`Character with id ${id} not found`);
      } else {
        res.status(200).json(char);
      }
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;