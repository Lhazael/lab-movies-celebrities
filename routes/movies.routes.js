const express = require("express");
const movieRouter = express.Router();
const MovieModel = require("./../models/movie.model")

/* GET movies page */
movieRouter.get("/movies", async (req, res, next) => {
    try {
      res.render("movies/movies", { movies: await MovieModel.find() });
    } catch (err) {
      next(err);
    }
  });
  
  // Add a new movie
  
  movieRouter.get("/new", async (req, res, next) => {
      const movies = await MovieModel.find();
      res.render("movies/new-movie", { movies });
    });
    
    movieRouter.post("/create", async (req, res, next) => {
      const newMovie = { ...req.body };
      console.log(newMovie);
      try {
        await MovieModel.create(newMovie);
        res.redirect("./movies");
      } catch (err) {
        res.render("movies/new-movie")
        next(err);
      }
    });

module.exports = movieRouter;