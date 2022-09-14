import MoviesAPI from "./api.js";

const searchField = document.getElementById("search-field");
const formText = document.getElementById("form-text");
const moviesList = document.getElementById("movies-list");

searchField.addEventListener("submit", async (event) => {
  event.preventDefault();

  await movies.getMoviesData(formText.value);
  console.log(movies.moviesList);

  moviesList.innerHTML = getMovieHtml(movies.moviesList[0]);
  //renderMovies(movies.moviesList);
});

/*
function renderMovies(moviesData) {
  const html = "";

  moviesData.forEach((movieData) => {
    console.log(movieData);
    html += getMovieHtml(movieData);
  });

  moviesList.innerHTML = html;
}*/

function getMovieHtml(movie) {
  return `
    <div class="movie-element">
        <img class="movie-poster" src="${movie.posterUrl}">

        <div class="movie-info">
            <div>
                <h2>${movie.title}</h2>
                <img src="images/star-icon.png">
                <p>${movie.rating}</p>
            </div>

            <div>
                <h3>${movie.releaseDate}</h3>
                <h3>${movie.genres}</h3>
                <button>Watchlist</button>
            </div>

            <p>${movie.description}</p>
        </div>
    </div>
    `;
}

const movies = new MoviesAPI();
