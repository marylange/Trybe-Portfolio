db.movies.insertMany( [
  {
    "title": "Batman",
    "category": [ "action", "adventure" ],
    "imdbRating": 7.6,
    "budget": 35
  },
  {
    "title": "Godzilla",
    "category": [ "action", "adventure", "sci-fi" ],
    "imdbRating": 6.6
  },
  {
    "title": "Home Alone",
    "category": [ "family", "comedy" ],
    "imdbRating": 7.4
  }
] );


// Exercício 1: Altere o imdbRating para 7.7 no filme Batman.

db.movies.updateOne(
  { "title": "Batman" },
  { $set: { "imdbRating": 7.7 } }
);


db.movies.find().pretty();