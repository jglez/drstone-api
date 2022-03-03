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

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Episode.getEpisodeById(id)
    .then(episode => {
      if (!episode) {
        res.status(404).json(`Episode with id ${id} not found`);
      } else {
        res.status(200).json(episode);
      }
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    })
});

module.exports = router;