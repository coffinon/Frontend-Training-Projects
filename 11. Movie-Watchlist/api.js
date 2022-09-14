import FetchWrapper from "./fetch-wrapper.js";

class MoviesAPI {
  constructor() {
    this.API = new FetchWrapper("https://api.themoviedb.org/3");
    this.API_KEY = "a33924f6dbefbab9994767f0488aa536";
    this.posterBaseUrl = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";
    this.moviesList = [];
  }

  async getMoviesData(movieTitle) {
    const data = await this.API.get(
      `/search/movie?api_key=${this.API_KEY}&query=${movieTitle}`
    );

    const moviesData = data.results.map((element) => ({
      posterUrl: this.posterBaseUrl + element.poster_path,
      title: element.title,
      rating: element.vote_average,
      releaseDate: element.release_date,
      genres: element.genre_ids,
      description: element.overview,
    }));

    this.convertGenreList(moviesData);
    this.moviesList = moviesData;
  }

  async convertGenreList(movies) {
    const data = await this.API.get(
      `/genre/movie/list?api_key=${this.API_KEY}`
    );

    movies.forEach(
      (movie) =>
        (movie.genres = movie.genres.map(
          (element) => data.genres.find((genre) => genre.id === element).name
        ))
    );
  }
}

export default MoviesAPI;
