import { Component } from 'react';
import css from '../Searchbar/Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    input: '',
  };

  handleChangeInput = event => {
    this.setState({ input: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.input);
    console.log('fetch');
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.form__button}>
            Search
          </button>

          <input
            className={css.form__input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.input}
            onChange={this.handleChangeInput}
          />
        </form>
      </header>
    );
  }
}
