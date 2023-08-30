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
  console.log(location);
  const titleMovie = title || original_title || original_name || name;

  return (
    <li>
      <Link
        to={`/movies/${movieId}`}
        state={{ from: location }}
        className={css.linkBox}
      >
        <div className={css.linkBoxImg}>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : 'https://cdn.pixabay.com/photo/2018/05/26/18/06/dog-3431913_1280.jpg'
            }
            alt={titleMovie}
          />
        </div>
        <p className={css.linkBoxTitle}>{titleMovie}</p>
      </Link>
    </li>
  );
};

// MoviesGalleryItem.propTypes = {};

export default MoviesGalleryItem;
