import { useState } from 'react';
import css from './SearchBar.module.css';
import { GrSearch } from 'react-icons/gr';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const SearchBar = props => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase().trim());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchQuery === '') {
      Notify.warning('Please enter your search query!');
      return;
    }

    props.onSubmit(searchQuery);
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
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
