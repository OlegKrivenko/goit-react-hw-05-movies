import PropTypes from 'prop-types';
import MoviesGalleryItem from 'components/MoviesGalleryItem';
import { MoviesBox } from './MoviesGallery.styled';

const MoviesGallery = ({ movies }) => {
  return (
    <MoviesBox>
      {movies &&
        movies.map(
          ({ id, poster_path, original_title, title, original_name, name }) => {
            return (
              <MoviesGalleryItem
                key={id}
                movieId={id}
                poster_path={poster_path}
                original_title={original_title}
                title={title}
                original_name={original_name}
                name={name}
              />
            );
          }
        )}
    </MoviesBox>
  );
};

export default MoviesGallery;

MoviesGallery.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
