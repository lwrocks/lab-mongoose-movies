const express = require("express");
const router = express.Router();
// const Celebrity = require("../models/celebrity");
const Movie = require("../models/movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/celebrities", (req, res, next) => {
  Celebrity.find({})
    .then(celebrityDocuments => {
      // res.send(celebrityDocuments);
      res.render("celebrities/index.hbs", {
        celebritiesList: celebrityDocuments
      });
    })
    .catch(err => {
      next(err);
    });
});

router.get("/movies", (req, res, next) => {
  Movie.find({})
    .then(movieDocuments => {
      res.render("movies/index.hbs", { moviesList: movieDocuments });
    })
    .catch(err => {
      next(err);
    });
});

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new.hbs");
});

router.get("/movies/new", (req, res, next) => {
  res.render("movies/new.hbs");
});

router.post("/celebrities", (req, res, next) => {
  Celebrity.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
    .then(createdCelebrity => {
      res.redirect(`/celebrities`);
    })
    .catch(err => {
      res.render("/celebrities/new");
    });
});

router.post("/movies", (req, res, next) => {
  Movie.create({
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  })
    .then(createdMovie => {
      res.redirect("/movies");
    })
    .catch(err => {
      res.render("/movies/new");
    });
});

router.get("/celebrities/:celebrityID/edit", (req, res, next) => {
  Celebrity.findById(req.params.celebrityID)
    .then(celebrityDocument => {
      res.render("celebrities/edit", celebrityDocument);
    })
    .catch(err => {
      next(err);
    });
});

router.post("/celebrities/:celebrityID", (req, res, next) => {
  Celebrity.updateOne(
    { _id: req.params.celebrityID },
    {
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase
    }
  )
    .then(() => {
      res.redirect(`/celebrities/${req.params.celebrityID}`);
    })
    .catch(err => {
      next(err);
    });
});

router.post("/celebrities/:celebrityID/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.celebrityID)
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(err => {
      next(err);
    });
});

router.get("/celebrities/:celebrityID", (req, res, next) => {
  Celebrity.findById(req.params.celebrityID)
    .then(celebrityDocument => {
      res.render("celebrities/celebrityDetails.hbs", celebrityDocument);
    })
    .catch(err => {
      next(err);
    });
});

router.get("/movies/:movieID", (req, res, next) => {
  Movie.findById(req.params.movieID)
    .then(movieDocument => {
      res.render("movies/movieDetails.hbs", movieDocument);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
