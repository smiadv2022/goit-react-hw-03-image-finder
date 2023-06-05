import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components';
import { List } from './ImageGallery.styled';

export const ImageGallery = ({ images, handleOpenModal }) => {
  return (
    <List>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          webformatURL={image.webformatURL}
          tags={image.tags}
          onClick={() => handleOpenModal(image)}
        />
      ))}
    </List>
  );
};
