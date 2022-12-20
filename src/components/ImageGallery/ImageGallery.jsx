import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from '../../styles.module.css';

export function ImageGallery({ imageData }) {
  return (
    <ul className={css.ImageGallery}>
      {imageData.map(image => (
        <ImageGalleryItem
          key={image.id}
          id={image.id}
          smallUrl={image.webformatURL}
          largeUrl={image.largeImageURL}
          desc={image.tags}
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
