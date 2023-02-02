import PropTypes from 'prop-types';
import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { Button } from '../Button/Button';
import { getSearchedImages } from 'services/imagesApi';
import css from '../ImageGallery/ImageGallery.module.css';

export class ImageGallery extends Component {
  state = {
    images: [],
    error: null,
    isLoading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.setState(prev => ({ isLoading: true }));
      try {
        const data = await getSearchedImages(this.props.query);
        console.log(data);
        this.setState({ images: data.hits });
      } catch (error) {
        this.setState({ error: error.message });
      } finally {
        this.setState(prev => ({ isLoading: false }));
      }
    }
  }

  render() {
    const { images, isLoading } = this.state;
    return (
      <>
        <ul className={css.gallery}>
          {images.map(({ id, webformatURL, tags }) => (
            <ImageGalleryItem key={id} image={webformatURL} desc={tags} />
          ))}
        </ul>
        {isLoading && <Loader />}

        {images.length > 0 && <Button />}
      </>
    );
  }
}

ImageGallery.propTypes = {
  query: PropTypes.string.isRequired,
};
