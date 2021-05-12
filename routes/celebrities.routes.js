const express = require("express");
const router = express.Router();
const CelebrityModel = require("./../models/celebrity.model")

/* GET celebrities page */
// celebrityRouter.get("/celebrities", (req, res, next) => {
//     CelebrityModel.find()
//     .then((dbResult) => {
//         res.render("celebrities/celebrities", {
//             Title: "celebrityList",
//             celebrities: dbResult,
//         });
//     })
//     .catch((dbErr) => next(dbErr));
// });

// /* Add a new celebrity */
// celebrityRouter.get("/celebrities/new", (req, res, next) => res.render("celebrities/new-celebrity"));

router.get("/new", async (req, res, next) => {
    const celebrities = await CelebrityModel.find();
    res.render("celebrities/new-celebrity", { celebrities });
  });
  
  router.post("/create", async (req, res, next) => {
    const newCelebrity = { ...req.body };
    console.log(newCelebrity);
    try {
      await CelebrityModel.create(newCelebrity);
      res.redirect("./celebrities");
    } catch (err) {
      res.render("celebrities/new-celebrity")
      next(err);
    }
  });
  
  // // Get all celebrities
  router.get("/celebrities", async (req, res, next) => {
    try {
      res.render("celebrities/celebrities", { celebrities: await CelebrityModel.find() });
    } catch (err) {
      next(err);
    }
  });
  

module.exports = router;