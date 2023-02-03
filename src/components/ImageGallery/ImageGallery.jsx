import PropTypes from 'prop-types';
import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { Button } from '../Button/Button';
import { Modal } from 'components/Modal/Modal';
import { getSearchedImagesApi } from 'services/imagesApi';
import css from '../ImageGallery/ImageGallery.module.css';

export class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    query: '',
    error: null,
    isLoading: false,
    isOpen: false,
    modalImg: '',
  };

  static getDerivedStateFromProps(newProps, state) {
    if (newProps.query !== state.query) {
      return { page: 1, query: newProps.query };
    }
    return null;
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.getSearchedImages();
    }
    if (prevState.page !== this.state.page && this.state.page !== 1) {
      this.getSearchedImages();
    }
    //   if (prevState.images !== this.state.images)
  }

  getSearchedImages = async () => {
    this.setState({ isLoading: true });
    try {
      const data = await getSearchedImagesApi(
        this.props.query,
        this.state.page
      );
      this.setState(prev => ({
        images:
          this.state.page === 1 ? data.hits : [...prev.images, ...data.hits],
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  updatePage = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  openModal = imageURL => {
    window.addEventListener('keydown', this.onPressEscape);
    this.setState(prev => ({ isOpen: !prev.isOpen, modalImg: imageURL }));
  };

  closeModal = () => {
    this.setState(prev => ({ isOpen: !prev.isOpen }));
  };

  render() {
    const { images, isLoading } = this.state;
    return (
      <>
        <ul className={css.gallery}>
          {images.map(({ id, webformatURL, tags, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              image={webformatURL}
              desc={tags}
              modalImg={largeImageURL}
              onClick={this.openModal}
            />
          ))}
        </ul>
        {isLoading && <Loader />}
        {this.state.isOpen && (
          <Modal image={this.state.modalImg} onCloseModal={this.closeModal} />
        )}

        {images.length > 0 && <Button onClick={this.updatePage} />}
      </>
    );
  }
}

ImageGallery.propTypes = {
  query: PropTypes.string.isRequired,
};
