import { useState, useEffect } from 'react';
import { Loader} from './Loader/Loader'
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { fetchImages } from "../services/fetchAPI";
import css from '../../src/styles.module.css';

export function App() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('ukraine');
  const [imageData, setImageData] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  
  useEffect(() => {
    if (query) getImages();

    async function getImages() {
      try {
        setIsloading(true);
        const newImages = await fetchImages(query, page);

        setImageData(currentImages => [...currentImages, ...newImages]);
        setIsloading(false);
      } catch (error) {
        console.log(error);
      }
    }
  }, [query, page]);

  function onSubmit(searchQuery) {
    setPage(1);
    setQuery(searchQuery);
    setImageData([]);
    setIsloading(false);
  }

  function onLoadMore() {
    setPage(page + 1);
  }

  function bodyScrollLock(displayModal) {
    if (!displayModal) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
    } else {
      document.body.style.overflow = 'visible';
      document.body.style.position = 'static';
    }
  }

    return (
      <div className={css.App}>
        <Searchbar onSubmit={onSubmit} isLoading={ isLoading} />
        {!!imageData.length && (
          <ImageGallery imageData={imageData} bodyScrollLock={bodyScrollLock} />
        )}

        {isLoading && <Loader/> }
        {!!imageData.length && <Button onLoadMore={onLoadMore} />}
      </div>
    );
  }

