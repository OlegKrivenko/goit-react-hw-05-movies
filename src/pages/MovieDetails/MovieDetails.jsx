import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import api from '../../services/movies-api';
import css from './MovieDetails.module.css';
import BackLink from 'components/BackLink';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    api
      .getDetailsMovie(movieId)
      .then(response => {
        console.log(response.data);
        setMovie(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  const titleMovie =
    movie.title || movie.original_title || movie.original_name || movie.name;
  const imgMovie = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const averageScore = movie.vote_average;

  const overview = movie.overview
    ? movie.overview
    : 'Sorry, this movie does not have overview.';

  const genres = movie.genres
    ? movie.genres.map(genre => genre.name).join(', ')
    : 'Sorry, this movie does not have genres.';

  return (
    <div>
      <BackLink to={backLinkHref}>Back</BackLink>
      {Object.keys(movie).length && (
        <div>
          <div className={css.box}>
            <img className={css.imgMovie} src={imgMovie} alt="" />

            <div className={css.textContainer}>
              <h2 className={css.tittle}>{titleMovie}</h2>
              <p className={css.averageScore}>Average score: {averageScore}</p>

              <div className={css.textBox}>
                <h3>Overview</h3>
                <p>{overview}</p>
              </div>

              <div className={css.textBox}>
                <h3>Geners</h3>
                <p>{genres}</p>
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

          <Outlet />
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
