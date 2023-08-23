import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '95f9e8f93efe7ad25d27786518d155d9';

const getTrendingMovies = () => {
  return axios
    .get(`${BASE_URL}trending/all/day?api_key=${API_KEY}`)
    .then(response => {
      console.log('getTrendingMovies:', response.data.results);

      return response.data.results;
    });
};

const getSearchMovies = query => {
  return axios
    .get(`${BASE_URL}search/movie?query=${query}&api_key=${API_KEY}`)
    .then(response => {
      // console.log('getSearchMovies:', response.data.results);

      return response.data.results;
    });
};

const getDetailsMovie = movieId => {
  return axios
    .get(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`)
    .then(response => {
      // console.log('getDetailsMovie:', response.data);

      return response.data;
    });
};

const getCreditsMovie = movieId => {
  return axios
    .get(`${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`)
    .then(response => {
      // console.log('getCreditsMovie:', response.data);

      return response.data;
    });
};

const getReviewsMovie = movieId => {
  return axios
    .get(`${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`)
    .then(response => {
      // console.log('getReviewsMovie:', response.data);

      return response.data;
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
