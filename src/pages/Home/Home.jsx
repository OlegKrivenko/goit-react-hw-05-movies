import { useEffect, useState } from 'react';
import api from '../../services/movies-api';
import MoviesGallery from 'components/MoviesGallery';
import { Title } from './Home.styled';

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
      <Title>Trending today</Title>
      <MoviesGallery movies={movies} />
    </>
  );
};

export default Home;
