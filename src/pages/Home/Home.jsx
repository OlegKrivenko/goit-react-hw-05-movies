import { useEffect, useState } from 'react';
import api from '../../services/movies-api';
import MoviesGallery from 'components/MoviesGallery';
import { TextError, Title } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    api
      .getTrendingMovies()
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.log(error);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (!isLoading && error) {
    return (
      <p className={TextError}>This page not create, try again later...</p>
    );
  }

  return (
    <>
      <Title>Trending today</Title>
      <MoviesGallery movies={movies} />
    </>
  );
};

export default Home;
