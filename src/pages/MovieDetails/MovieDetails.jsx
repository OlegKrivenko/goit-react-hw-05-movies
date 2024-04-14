import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import api from '../../services/movies-api';
import css from './MovieDetails.module.css';
import BackLink from 'components/BackLink';
import Loader from 'components/Loader';
import getPosterImg from 'services/getPosterImg';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  // useRef - робить стабільне посилання на попередню сторінку зі запитом
  // Якщо без useRef то при натиснені на вкладені компоненти Cast та Reviews
  // буде змінюватись посилання на попердню сторінку location.state?.from
  const backLinkHref = useRef(location.state?.from ?? '/');
  console.log(backLinkHref.current);

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    api
      .getDetailsMovie(movieId)
      .then(response => {
        setMovie(response.data);
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
        <BackLink to={backLinkHref.current}>Back</BackLink>
        <p className={css.errorText}>
          This page not create, try again later...
        </p>
      </>
    );
  }

  return (
    <div>
      <BackLink to={backLinkHref.current}>Back</BackLink>
      {isLoading && <Loader />}
      {movie && (
        <div>
          <div className={css.box}>
            <img
              className={css.imgMovie}
              src={getPosterImg(movie.poster_path)}
              alt=""
            />

            <div className={css.textContainer}>
              <h2 className={css.tittle}>
                {movie.title ||
                  movie.original_title ||
                  movie.original_name ||
                  movie.name}
              </h2>
              <p className={css.averageScore}>
                Average score: {movie.vote_average}
              </p>

              <div className={css.textBox}>
                <h3>Overview</h3>
                <p>
                  {movie.overview
                    ? movie.overview
                    : 'Sorry, this movie does not have overview.'}
                </p>
              </div>

              <div className={css.textBox}>
                <h3>Geners</h3>
                <p>
                  {movie.genres
                    ? movie.genres.map(genre => genre.name).join(', ')
                    : 'Sorry, this movie does not have genres.'}
                </p>
              </div>

              <div className={css.textBox}>
                <h3>Additional information</h3>
                <ul className={css.list}>
                  <li className={css.list__item}>
                    <Link className={css.list__link} to="cast">
                      Cast
                    </Link>
                  </li>
                  <li className={css.list__item}>
                    <Link className={css.list__link} to="reviews">
                      Reviews
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Suspense>
            <Outlet fallback={<div>Loading subpage...</div>} />
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
