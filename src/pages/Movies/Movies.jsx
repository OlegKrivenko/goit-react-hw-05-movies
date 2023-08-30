import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import api from '../../services/movies-api';
import { TextError } from './Movies.styled';
import SearchBar from 'components/SearchBar';
import MoviesGallery from 'components/MoviesGallery';

const Movies = () => {
  const [movies, setMovies] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
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
        console.log(response.data.results);
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

  const handleFormSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <>
      <SearchBar onSubmit={handleFormSubmit} />
      {movies && <MoviesGallery movies={movies} />}
    </>
  );
};

export default Movies;
