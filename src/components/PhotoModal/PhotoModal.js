import { usePhoto } from '../../hooks';
import Modal from '../Modal';
import './PhotoModal.css';

const PhotoModal = ({ onClose, photoId }) => {
  const photo = usePhoto(photoId);

  let content;
  let title;

  let address = ['...'];

  if (photo) {
    address = [];
    const { city, country, suburb, town, village } = photo.location.address;
    let metro;

    if (city) {
      metro = city;
    } else if (town) {
      metro = town;
    }

    if (suburb && metro !== suburb) {
      address.push(suburb);
    }

    if (metro) {
      address.push(metro);
    }

    if (country) {
      address.push(country);
    }

    content = <img alt={''} src={photo?.url} />;
    title = address.join(', ');
  }

  return (
    <Modal id={'photo-modal'} onClose={onClose} title={title}>
      {content}
    </Modal>
  );
};

export default PhotoModal;
