import { useEffect } from 'react';
import { useState } from 'react';
import api from '../../services/movies-api';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';
import getPosterImg from '../../services/getPosterImg';
import Loader from 'components/Loader';

const Cast = ({ state }) => {
  const [cast, setCast] = useState([]);
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
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  if (!isLoading && error) {
    return (
      <>
        <h2 className={css.tittle}>Cast</h2>
        <p className={css.errorText}>
          This cast not create, try again later...
        </p>
      </>
    );
  }

  return (
    <>
      <h2 className={css.tittle}>Cast</h2>
      {isLoading && <Loader />}
      <ul className={css.castBox}>
        {cast &&
          cast.map(({ id, profile_path, original_name, name, character }) => {
            return (
              <li className={css.castBox__item} key={id}>
                <img
                  className={css.castBox__img}
                  src={getPosterImg(profile_path)}
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
