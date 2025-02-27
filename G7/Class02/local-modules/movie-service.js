const printMovieInfo = (moviesList) => {
    moviesList.forEach((movie) => {
        // Create logic that this callback is executing
        console.log(`${movie.title} is ${movie.genre}`)
    })
};

const filterMoviesByGenre = (moviesList, movieGenre) => {
    const filteredMovies = moviesList.filter((movie) => {
        return movie.genre === movieGenre
    });

    return filteredMovies
};

const findMovieById = (moviesList, movieId) => {
    // movieId = 3

    // { id: 3, title: 'Ace Ventura', genre: 'Comedy' }

    // find => value if found or undefined if not found

    const movieFound = moviesList.find((movie) => {
        return movie.id === movieId
    })

    return movieFound
}

// MULTI DEFAULT EXPORT
// LOCAL MODULE
export default {
    printMovieInfo,
    filterMoviesByGenre,
    findMovieById
}