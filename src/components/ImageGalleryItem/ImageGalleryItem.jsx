import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ image, desc }) => {
  return (
    <li className={css.galleryItem}>
      <img src={image} alt={desc} />
    </li>
  );
};
