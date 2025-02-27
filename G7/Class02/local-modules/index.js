// SINGLE DEFAULT IMPORT
import movies from "./movies.js"; // Local Module
// MULTI DEFAULT IMPORT
import movieModule from "./movie-service.js"; // Local module

console.log(movies);



console.log('*** FOR EACH ***')
movieModule.printMovieInfo(movies)

console.log('*** FILTER ***')
const comedyMovies = movieModule.filterMoviesByGenre(movies, "Comedy");
console.log(comedyMovies)


console.log('*** FIND ***')
const movieFound = movieModule.findMovieById(movies, 2);
console.log(movieFound);

const movieNotFound = movieModule.findMovieById(movies, 12);
console.log(movieNotFound) // undefined