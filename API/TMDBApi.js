// API/TMDBApi.js

const API_TOKEN = "bd5e709ceea8b7cc79440aa89b59e8e8";

export function getFilmsFromApiWithSearchedText(text) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}
export function getImageFromApi(name) {
  return 'https://image.tmdb.org/t/p/w300' + name
}