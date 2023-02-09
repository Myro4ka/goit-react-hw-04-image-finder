import PropTypes from 'prop-types';
import { useState } from 'react';
import { Icons } from 'components/Icons/Icons';
import css from '../Searchbar/Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleChangeInput = event => {
    setInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(input);
  };

  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button type="submit" className={css.form__button}>
          <Icons name="search" />
        </button>

        <input
          className={css.form__input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={input}
          onChange={handleChangeInput}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
