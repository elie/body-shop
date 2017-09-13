const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", function(req, res, next) {
  db.Driver
    .find({})
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
    .then(function() {
      res.redirect("/drivers");
    })
    .catch(function(err) {
      next(err);
    });
});

router.get("/new", function(req, res, next) {
  res.render("drivers/new");
});

router.get("/:id", function(req, res, next) {});

router.get("/:id/edit", function(req, res, next) {
  db.Driver
    .findById(req.params.id)
    .then(function(driver) {
      res.render("drivers/edit", { driver });
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

router.delete("/:id", function(req, res, next) {
  db.Driver
    .findByIdAndRemove(req.params.id)
    .then(function() {
      res.redirect("/drivers");
    })
    .catch(function(err) {
      next(err);
    });
});

module.exports = router;
