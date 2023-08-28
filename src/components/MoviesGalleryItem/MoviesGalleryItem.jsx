// import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import css from './MoviesGalleryItem.module.css';

const MoviesGalleryItem = ({
  movieId,
  poster_path,
  original_title,
  title,
  original_name,
  name,
}) => {
  const location = useLocation();
  const titleMovie = title || original_title || original_name || name;

  return (
    <li>
      <Link
        to={`movies/${movieId}`}
        state={{ from: location }}
        className={css.linkBox}
      >
        <img
          className={css.linkBoxImg}
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={titleMovie}
        />
        <p className={css.linkBoxTitle}>{titleMovie}</p>
      </Link>
    </li>
  );
};

// MoviesGalleryItem.propTypes = {};

export default MoviesGalleryItem;
