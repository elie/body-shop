const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", function(req, res, next) {
  db.Driver
    .find({})
    .populate("cars")
    .then(function(drivers) {
      res.send(drivers);
    })
    .catch(function(err) {
      next(err);
    });
});

router.post("/", function(req, res, next) {
  db.Driver
    .create(req.body)
    .then(function(newDriver) {
      res.status(201).send(newDriver);
    })
    .catch(function(err) {
      next(err);
    });
});

router.patch("/:id", function(req, res, next) {
  db.Driver
    .findByIdAndUpdate(req.params.id, req.body)
    .then(function() {
      res.redirect("/drivers");
    })
    .catch(function(err) {
      next(err);
    });
});

router.delete("/:id", async function(req, res, next) {
  try {
    let foundDriver = await db.Driver.findById(req.params.id);
    let removedDriver = await foundDriver.remove();
    res.status(204).send("Deleted");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
