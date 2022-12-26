import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { createRef, useEffect } from 'react';
import css from '../../styles.module.css';

export function ImageGallery({ imageData, bodyScrollLock }) {
  
  const itemRef = createRef();
  useEffect(() => {
    if (imageData.length < 13) return;
    window.scrollBy({ top: window.innerHeight - 200, behavior: 'smooth' });
  }, [imageData]);

  return (
    <ul className={css.ImageGallery}>
      {imageData.map((image, index) => (
        <ImageGalleryItem
          key={image.id}
          ref={index % 12 === 0 ? itemRef : null}
          id={image.id}
          smallUrl={image.webformatURL}
          largeUrl={image.largeImageURL}
          desc={image.tags}
          bodyScrollLock={ bodyScrollLock}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  imageData: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
    })
  ).isRequired,
}
