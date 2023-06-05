import { Item, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, tags }) => {
  return (
    <Item>
      <Image src={webformatURL} alt={tags} loading="txt" />
    </Item>
  );
};
