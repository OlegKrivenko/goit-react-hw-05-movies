import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '95f9e8f93efe7ad25d27786518d155d9';

const getTrendingMovies = async () => {
  try {
    return await axios.get(`trending/all/day?api_key=${API_KEY}`);
  } catch (error) {
    console.log(error);
  }
};
// const getTrendingMovies = () => {
//   return axios.get(`trending/all/day?api_key=${API_KEY}`).then(response => {
//     console.log('getTrendingMovies:', response);

//     return response.data.results;
//   });
// };

const getSearchMovies = async query => {
  try {
    return await axios.get(`search/movie?query=${query}&api_key=${API_KEY}`);
  } catch (error) {
    console.log(error);
  }
};

const getDetailsMovie = async movieId => {
  try {
    return await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
  } catch (error) {
    console.log(error);
  }
};

const getCreditsMovie = async movieId => {
  try {
    return await axios.get(`movie/${movieId}/credits?api_key=${API_KEY}`);
  } catch (error) {
    console.log(error);
  }
};

const getReviewsMovie = async movieId => {
  try {
    return await axios.get(`movie/${movieId}/reviews?api_key=${API_KEY}`);
  } catch (error) {}
};

const api = {
  getTrendingMovies,
  getSearchMovies,
  getDetailsMovie,
  getCreditsMovie,
  getReviewsMovie,
};

export default api;
