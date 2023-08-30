import SearchBar from 'components/SearchBar';
import { useState } from 'react';

const Movies = () => {
  const [movies, setMovies] = useState();

  const handleFormSubmit = query => {};

  return (
    <div>
      <SearchBar />
    </div>
  );
};

export default Movies;
