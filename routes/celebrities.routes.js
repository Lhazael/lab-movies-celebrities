const express = require("express");
const router = express.Router();
const CelebrityModel = require("./../models/celebrity.model")

/* GET celebrities page */
router.get("/", (req, res, next) => {
    CelebrityModel.find()
    .then((dbResult) => {
        res.render("celebrities/celebrities", {
            Title: "celebrityList",
            celebrities: dbResult,
        });
    })
    .catch((dbErr) => next(dbErr));
});

/* GET celebrities page */
router.get("/celebrities/new", (req, res, next) => res.render("celebrities/new-celebrity"));



module.exports = router;