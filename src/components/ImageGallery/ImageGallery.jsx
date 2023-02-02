import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import { getSearchedImages } from 'services/imagesApi';
import { Button } from '../Button/Button';
import css from '../ImageGallery/ImageGallery.module.css';

export class ImageGallery extends Component {
  state = {
    images: [],
    error: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      try {
        const data = await getSearchedImages(this.props.query);
        console.log(data);
        this.setState({ images: data.hits });
      } catch (error) {
        this.setState({ error: error.message });
      }
    }
  }

  render() {
    return (
      <>
        <ul className={css.gallery}>
          {this.state.images.map(({ id, webformatURL, tags }) => (
            <ImageGalleryItem key={id} image={webformatURL} desc={tags} />
          ))}
        </ul>
        <Button />
      </>
    );
  }
}
