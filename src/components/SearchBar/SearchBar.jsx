import { useState } from 'react';
import css from './SearchBar.module.css';
import { GrSearch } from 'react-icons/gr';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useSearchParams } from 'react-router-dom';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [, setSearchParams] = useSearchParams();

  const handleChange = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase().trim());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchQuery === '') {
      Notify.warning('Please enter your search query!');
      return;
    }

    setSearchParams({ query: searchQuery });
  };

  return (
    <div className={css.searchbar}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button type="submit" className={css.button}>
          <GrSearch size="24px" />
          {/* <span className={css.button__label}>Search</span> */}
        </button>

        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={searchQuery}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default SearchBar;
