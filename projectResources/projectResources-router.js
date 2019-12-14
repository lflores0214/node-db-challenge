const express = require("express");
const pr = require("./project-resources-model");
const router = express.Router();

router.get("/", (req, res) => {
  pr.get()
    .then(pr => {
      res.status(200).json(pr);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        errorMessage: "error retrieving project resources"
      });
    });
});

router.post("/", (req, res) => {
  const body = req.params;
  pr
  .add(body)
  .then(pr => {
    res.status(201).json(pr);
  })
  .catch(error => {
      console.log(error);
      res.status(500).json({
          errorMessage: "error posting project resource"
      })
  })
});

module.exports = router;
