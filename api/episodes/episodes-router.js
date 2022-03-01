const router = require("express").Router();
const Episode = require("./episodes-model.js");

router.get("/", (req, res) => {
  Episode.getEpisodes()
    .then(episodes => {
      res.status(200).json(episodes);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    })
});

module.exports = router;