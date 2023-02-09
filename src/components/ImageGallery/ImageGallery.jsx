import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { Button } from '../Button/Button';
import { Modal } from 'components/Modal/Modal';
import { getSearchedImagesApi } from 'services/imagesApi';
import css from '../ImageGallery/ImageGallery.module.css';

export const ImageGallery = ({ query }) => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [modalImg, setModalImg] = useState('');

  const updatePage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = imageURL => {
    setIsOpen(prevIsOpen => !prevIsOpen);
    setModalImg(imageURL);
  };

  const closeModal = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const data = await getSearchedImagesApi(query, page);
        setImages(prevImages =>
          page === 1 ? data.hits : [...prevImages, ...data.hits]
        );
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  useEffect(() => {
    setPage(1);
  }, [query]);

  return (
    <>
      <ul className={css.gallery}>
        {images.map(
          ({ id, webformatURL, tags, largeImageURL }, index, array) => (
            <ImageGalleryItem
              key={id}
              image={webformatURL}
              desc={tags}
              modalImg={largeImageURL}
              onClick={openModal}
            />
          )
        )}
      </ul>
      {isLoading && <Loader />}
      {isOpen && <Modal image={modalImg} onCloseModal={closeModal} />}

      {images.length > 0 && <Button onClick={updatePage} />}
    </>
  );
};

ImageGallery.propTypes = {
  query: PropTypes.string.isRequired,
};
