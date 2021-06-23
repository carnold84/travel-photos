import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './ImageModal.css';

const ImageModal = ({ data, isVisible, onClose }) => {
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

    if (isVisible) {
      getLocation();
      window.addEventListener('keydown', onKeyDown);
    } else {
      setLocation(null);
      window.removeEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isVisible, onClose]);

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
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="image-modal"
          initial={{ y: '100%' }}
          animate={{ y: 0, transition: { ease: 'easeOut', duration: 0.5 } }}
          exit={{ y: '100%', transition: { ease: 'easeIn', duration: 0.5 } }}>
          <header className={'header'}>
            {location && <span>{address.join(', ')}</span>}
            <button className={'close-btn'} onClick={onClose}>
              <svg
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41L12.59 0Z" />
              </svg>
            </button>
          </header>
          <div className={'content'}>
            <img alt={''} src={data?.url} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;
