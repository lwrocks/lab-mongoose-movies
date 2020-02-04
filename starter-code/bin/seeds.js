/* const celebrities = [
  {
    name: "Tove",
    occupation: "Chief Cuddle Officer",
    catchPhrase: "The couch is mine"
  },

  {
    name: "Jennifer Lopez",
    occupation: "Singer",
    catchPhrase: "This butt don't age!"
  },

  {
    name: "Shakira",
    occupation: "Singer",
    catchPhrase: "These hips don't lie"
  }
]; */

const movies = [
  {
    title: "Mean Girls",
    genre: "Comedy",
    plot:
      "A girl moves to suburban Chicago from Africa and tries to make new friends."
  },

  {
    title: "Pretty Woman",
    genre: "Romantic Comedy",
    plot:
      "A Hollywood hooker has a romantic rendevous with a charming management consultant."
  },

  {
    title: "Friday the 13th",
    genre: "Horror",
    plot: "A really bad slasher movie from the 80s."
  }
];

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/ironhack-celebrities", () => {
  console.log("Connected to DB");
});

// const Celebrity = require("../models/celebrity");
const Movie = require("../models/movie");

// Celebrity.collection.drop();
Movie.collection.drop();

/* Celebrity.create(celebrities)
  .then(result => {
    console.log(`Created ${result.length} celebrities`);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  }); */

Movie.create(movies)
  .then(result => {
    console.log(`Created ${result.length} movies`);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });
