import { Component } from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import '../App/App.module.css';

export class App extends Component {
  render() {
    return (
      <>
        <Searchbar />
        <ImageGallery />
      </>
    );
  }
}
