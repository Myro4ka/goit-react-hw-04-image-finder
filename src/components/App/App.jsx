import { useState } from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import '../App/App.module.css';

export const App = () => {
  const [query, setQuery] = useState('');

  const changeQuery = inputQuery => {
    setQuery(inputQuery);
  };

  return (
    <>
      <Searchbar onSubmit={changeQuery} />
      <ImageGallery query={query} />
    </>
  );
};
