import { Component } from 'react';
import css from '../Searchbar/Searchbar.module.css';

export class Searchbar extends Component {
  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form}>
          <button type="submit" className={css.form__button}>
            Search
          </button>

          <input
            className={css.form__input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
