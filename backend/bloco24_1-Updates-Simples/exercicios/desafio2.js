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

// Exercício 2: Altere budget para 1 no filme Godzilla.

db.movies.updateOne(
  { "title": "Godzilla" },
  { $set: { "budget": 1 } }
);