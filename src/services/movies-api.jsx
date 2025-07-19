import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '95f9e8f93efe7ad25d27786518d155d9';

const getTrendingMovies = async () => {
  // return await axios.get(`trending/all/day?api_key=${API_KEY}`); // було спочатку так

  return await axios.get(`trending/all/day`, { params: { api_key: API_KEY } }); // записано через парамс, більш декларативніше виглядає код
};

const getSearchMovies = async query => {
  // return await axios.get(`search/movie?query=${query}&api_key=${API_KEY}`); // було спочатку так

  return await axios.get(`search/movie`, {
    params: { api_key: API_KEY, query: query },
  });
};

const getDetailsMovie = async movieId => {
  // return await axios.get(`movie/${movieId}?api_key=${API_KEY}`); // було спочатку так

  return await axios.get(`movie/${movieId}`, { params: { api_key: API_KEY } });
};

const getCreditsMovie = async movieId => {
  // return await axios.get(`movie/${movieId}/credits?api_key=${API_KEY}`); // було спочатку так

  return await axios.get(`movie/${movieId}/credits`, {
    params: { api_key: API_KEY },
  });
};

const getReviewsMovie = async movieId => {
  // return await axios.get(`movie/${movieId}/reviews?api_key=${API_KEY}`); // було спочатку так

  return await axios.get(`movie/${movieId}/reviews`, {
    params: { api_key: API_KEY },
  });
};

const api = {
  getTrendingMovies,
  getSearchMovies,
  getDetailsMovie,
  getCreditsMovie,
  getReviewsMovie,
};

export default api;
