import React from 'react';

function MoviesList({ movies }) {
  return (
    <ul>
      {movies &&
        movies.map(movie => {
          return (
            <li key={movie.id}>
              <p>{movie.id}</p>
            </li>
          );
        })}
    </ul>
  );
}

export default MoviesList;
