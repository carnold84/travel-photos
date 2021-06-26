import { useEffect, useState } from 'react';
import Modal from '../Modal';
import './ImageModal.css';

const ImageModal = ({ data, onClose }) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const onKeyDown = (evt) => {
      if (evt.keyCode === 27) {
        onClose();
      }
    };

    const getLocation = async () => {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${data.latitude}&lon=${data.longitude}&format=json`
      );
      console.log(response);
      const nextLocation = await response.json();

      setLocation(nextLocation);
      console.log(nextLocation);
    };

    getLocation();
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  let address = ['...'];

  if (location) {
    address = [];
    const { city, country, suburb, town, village } = location.address;
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
  }
  console.log(address);

  return (
    <Modal onClose={onClose} title={address.join(', ')}>
      <img alt={''} src={data?.url} />
    </Modal>
  );
};

export default ImageModal;
