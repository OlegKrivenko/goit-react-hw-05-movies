import MoviesGalleryItem from 'components/MoviesGalleryItem';
import css from './MoviesGallery.module.css';

const MoviesGallery = ({ movies }) => {
  console.log(movies);

  return (
    <ul className={css.moviesBox}>
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
    </ul>
  );
};

export default MoviesGallery;
