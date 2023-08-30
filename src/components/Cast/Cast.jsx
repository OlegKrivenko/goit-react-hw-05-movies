import { useEffect } from 'react';
import { useState } from 'react';
import api from '../../services/movies-api';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    api
      .getCreditsMovie(movieId)
      .then(response => {
        setCast(response.data.cast);
      })
      .catch(error => {
        console.log(error);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  if (!isLoading && error) {
    return (
      <p className={css.errorText}>This cast not create, try again later...</p>
    );
  }

  return (
    <>
      <h2 className={css.tittle}>Cast</h2>
      <ul className={css.castBox}>
        {cast &&
          cast.map(({ id, profile_path, original_name, name, character }) => {
            return (
              <li className={css.castBox__item} key={id}>
                <img
                  className={css.castBox__img}
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : 'https://cdn.pixabay.com/photo/2018/05/26/18/06/dog-3431913_1280.jpg'
                  }
                  alt={original_name || name}
                />
                <p className={css.castBox__name}>{original_name || name}</p>
                <p className={css.castBox__character}>{character}</p>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Cast;
