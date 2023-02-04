import { Component } from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import '../App/App.module.css';

export class App extends Component {
  state = {
    query: '',
  };

  changeQuery = inputQuery => {
    this.setState({ query: inputQuery });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.changeQuery} />
        <ImageGallery query={this.state.query} />
      </>
    );
  }
}
