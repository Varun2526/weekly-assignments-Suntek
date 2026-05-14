/**
 * @file assignmentadv4.js
 * @description Movie Streaming Recommendation — genre filtering, rating
 *              aggregation, and movie search using array HOFs.
 * @concepts filter() by category, map() for string formatting, reduce() for averages
 */

// Movie dataset with genre and rating info
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// 1. filter() — Get only Sci-Fi movies
const sciFiMovies = movies.filter((movie) => movie.genre === "Sci-Fi");
console.log("Sci-Fi movies:", sciFiMovies);

// 2. map() — Format each movie as "Title (Rating)" string
const formattedMovies = movies.map((movie) => `${movie.title} (${movie.rating})`);
console.log("Formatted:", formattedMovies);

// 3. reduce() — Calculate the average rating across all movies
const averageRating = movies.reduce((total, movie) => total + movie.rating, 0) / movies.length;
console.log("Average rating:", averageRating);

// 4. find() — Find the movie titled "Joker"
const jokerMovie = movies.find((movie) => movie.title === "Joker");
console.log("Joker:", jokerMovie);

// 5. findIndex() — Get the index of "Avengers"
const avengersIndex = movies.findIndex((movie) => movie.title === "Avengers");
console.log("Avengers index:", avengersIndex);