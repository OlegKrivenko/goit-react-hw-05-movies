import { useEffect, useState } from 'react';
import api from '../../services/movies-api';
import MoviesGallery from 'components/MoviesGallery';
import { TextError, Title } from './Home.styled';
import Loader from 'components/Loader';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

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
      <>
        <TextError>This page not create, try again later...</TextError>
      </>
    );
  }

  return (
    <>
      <Title>Trending today</Title>
      {isLoading && <Loader />}
      {movies && <MoviesGallery movies={movies} />}
    </>
  );
};

export default Home;
