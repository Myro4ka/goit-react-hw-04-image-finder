import { Component } from 'react';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={css.galleryItem}>
        <img src="#" alt="" />
      </li>
    );
  }
}
