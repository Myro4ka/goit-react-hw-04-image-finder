import PropTypes from 'prop-types';
import { Component } from 'react';
import { Icons } from 'components/Icons/Icons';
// import '../../images/symbol-defs.svg';
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
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.form__button}>
            <Icons name="search" />
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

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
