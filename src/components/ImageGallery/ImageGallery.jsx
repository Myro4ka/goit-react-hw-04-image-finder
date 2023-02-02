import { Component } from 'react';
import css from '../ImageGallery/ImageGallery.module.css';

export class ImageGallery extends Component {
  render() {
    return <ul className={css.gallery}>{/* <ImageGalleryItem /> */}</ul>;
  }
}
