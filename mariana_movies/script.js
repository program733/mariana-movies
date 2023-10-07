const movies = [
    { 
        title: "Movie 1",
        genre: "action",
        rating: 4.5,
        year: 2021,
        metacriticRating: 80,
        runtime: "2h 15m",
        poster: "movie1.PNG"
    },
    { 
        title: "Movie 2",
        genre: "comedy",
        rating: 3.8,
        year: 2019,
        metacriticRating: 85,
        runtime: "1h 45m",
        poster: "movie2.PNG"
    },
    { 
        title: "Movie 3",
        genre: "drama",
        rating: 4.0,
        year: 2020,
        metacriticRating: 88,
        runtime: "2h 30m",
        poster: "movie3.PNG"
    }
    // Add more movies as needed
];

const genreSelect = document.getElementById("genre");
const searchInput = document.getElementById("search");
const movieTableBody = document.getElementById("movie-list");

function displayMovies() {
    const selectedGenre = genreSelect.value;
    const searchText = searchInput.value.toLowerCase();

    movieTableBody.innerHTML = "";
    movies.forEach(movie => {
        if ((selectedGenre === "all" || movie.genre === selectedGenre)
            && (searchText === "" || movie.title.toLowerCase().includes(searchText))) {
            const row = document.createElement("tr");
            row.innerHTML = `<td><img src="images/${movie.poster}" alt="${movie.title}" class="poster"></td>
                             <td>${movie.title}</td>
                             <td>${movie.genre}</td>
                             <td>${movie.rating}</td>
                             <td>${movie.year}</td>
                             <td>${movie.metacriticRating}</td>
                             <td>${movie.runtime}</td>`;
            movieTableBody.appendChild(row);
        }
    });
}

genreSelect.addEventListener("change", displayMovies);
searchInput.addEventListener("input", displayMovies);

// Initial display of movies
displayMovies();
