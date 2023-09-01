import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import api from '../../services/movies-api';
import { TextError } from './Movies.styled';
import SearchBar from 'components/SearchBar';
import MoviesGallery from 'components/MoviesGallery';
import Loader from 'components/Loader';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    setIsLoading(true);
    api
      .getSearchMovies(searchQuery)
      .then(response => {
        setMovies(response.data.results);
        if (response.data.results.length === 0) {
          Notify.warning('Sory this movie is missing!');
        }
      })
      .catch(error => {
        console.log(error);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchQuery]);

  if (!isLoading && error) {
    return (
      <p className={TextError}>This page not create, try again later...</p>
    );
  }

  return (
    <>
      <SearchBar />
      {isLoading && <Loader />}

      {movies && <MoviesGallery movies={movies} />}
    </>
  );
};

export default Movies;
