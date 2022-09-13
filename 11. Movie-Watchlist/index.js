const API_KEY = "a33924f6dbefbab9994767f0488aa536"
const API_BASE_URL_SEARCH = "https://api.themoviedb.org/3/search/movie"
const API_BASE_URL_POSTER = "https://image.tmdb.org/t/p/w600_and_h900_bestv2"

const movieTitle = "cars"


async function getMoviesData() {
    const response = await fetch(`${API_BASE_URL_SEARCH}?api_key=${API_KEY}&query=${movieTitle}`)
    const data = await response.json()
    
    console.log(data.results[0])
}

getMoviesData()