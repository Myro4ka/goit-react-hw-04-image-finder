import PropTypes from 'prop-types';
import { useEffect } from 'react';
import css from '../Modal/Modal.module.css';

export const Modal = ({ image, onCloseModal }) => {
  const onPressEscape = event => {
    if (event.key !== 'Escape') return;
    onCloseModal();
  };

  const handleCloseModal = event => {
    if (event.target !== event.currentTarget) return;
    window.removeEventListener('keydown', onPressEscape);
    onCloseModal();
  };

  useEffect(() => {
    window.addEventListener('keydown', onPressEscape);
  });

  return (
    <div className={css.overlay} onClick={handleCloseModal}>
      <div className={css.modal__image}>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
