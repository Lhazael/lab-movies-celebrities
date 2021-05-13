const express = require("express");
const router = express.Router();
const CelebrityModel = require("./../models/celebrity.model")

/* GET celebrities page */
router.get("/celebrities", async (req, res, next) => {
  try {
    res.render("celebrities/celebrities", { celebrities: await CelebrityModel.find() });
  } catch (err) {
    next(err);
  }
});

// Add a new celebrity 

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
  
module.exports = router;