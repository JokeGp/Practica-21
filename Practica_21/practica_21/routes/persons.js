const express = require(`express`);
const router = express.Router();
const mongoose = require(`../node_modules/mongoose`);
let Person = require(`../models/person`);

router.get("/", function (req, res) {
  res.render("main");
});

router.get(`/persons`, function (req, res, next) {
  Person.find(function (err, boludos) {
    if (err) return next(err);
    // res.json(boludos);
    res.render(`personsIndex`, { boludos });
  });
});

router.get(`/person`, function (req, res) {
  res.render(`person`);
});

router.post(`/addPerson`, function (req, res) {
  const myPerson = new Person({
    // crea entidad
    nombre: req.body.nombre,
    edad: req.body.edad,
    tipoSangre: req.body.tipoSangre,
    nss: req.body.nss,
  });
  myPerson.save(); // Guarda en BD
  res.redirect(`/persons`);
});

module.exports = router;
