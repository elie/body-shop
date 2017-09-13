const express = require("express");
const router = express.Router({ mergeParams: true });
const db = require("../models");

// GET -> /drivers/:driver_id/cars
router.get("/", function(req, res, next) {
  db.Driver
    .findById(req.params.driver_id)
    .populate("cars")
    .then(function(driver) {
      res.render("cars/index", { driver });
      // res.send(driver);
    })
    .catch(function(err) {
      next(err);
    });
});

// POST -> /drivers/:driver_id/cars
router.post("/", function(req, res, next) {
  // I need to make a car
  const newCar = Object.assign({}, req.body, { driver: req.params.driver_id });
  db.Car
    .create(newCar)
    .then(function(car) {
      // I need to then tell the driver about the car I made
      db.Driver.findById(req.params.driver_id).then(function(driver) {
        driver.cars.push(car);
        driver.save().then(function() {
          res.redirect(`/drivers/${driver.id}/cars`);
        });
      });
    })
    .catch(function(err) {
      next(err);
    });
});

router.get("/new", function(req, res, next) {
  db.Driver
    .findById(req.params.driver_id)
    .then(function(driver) {
      res.render("cars/new", { driver });
    })
    .catch(function(err) {
      next(err);
    });
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
