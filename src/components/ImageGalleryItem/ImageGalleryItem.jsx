import PropTypes from 'prop-types';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  image,
  desc,
  modalImg,
  imagesItemRef,
  onClick,
}) => {
  return (
    <li
      className={css.gallery__item}
      ref={imagesItemRef}
      onClick={() => onClick(modalImg)}
    >
      <img src={image} alt={desc} className={css.gallery__item_image} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  modalImg: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
