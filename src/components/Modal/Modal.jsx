import PropTypes from 'prop-types';
import { Component } from 'react';
import css from '../Modal/Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onPressEscape);
  }

  onPressEscape = event => {
    if (event.key !== 'Escape') return;
    this.props.onCloseModal();
  };

  handleCloseModal = event => {
    if (event.target !== event.currentTarget) return;
    window.removeEventListener('keydown', this.onPressEscape);
    this.props.onCloseModal();
  };

  render() {
    return (
      <div className={css.overlay} onClick={this.handleCloseModal}>
        <div className={css.modal__image}>
          <img src={this.props.image} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
