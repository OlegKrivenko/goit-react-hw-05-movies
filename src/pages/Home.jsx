import { useEffect, useState } from 'react';
import api from '../services/movies-api';
import MoviesGallery from 'components/MoviesGallery';

const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    api
      .getTrendingMovies()
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <MoviesGallery movies={movies} />
    </>
  );
};

export default Home;
