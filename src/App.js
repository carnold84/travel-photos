import { useState } from 'react';
import './App.css';
import { Router } from '@reach/router';
import { AnimatePresence } from 'framer-motion';

import List from './views/List';
import Photo from './views/Photo';
import Trip from './views/Trip';
import Upload from './views/Upload';

const App = () => {
  /* useEffect(() => {
    const onCloseImageModal = () => {
      setModal(null);
    };

    const loadImage = async (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = async () => {
          let { latitude, longitude } = (await exifr.gps(url)) || {};
          const image = {
            id: Date.now(),
            latitude,
            longitude,
            url,
          };
          image.onClick = () => {
            setModal(<ImageModal data={image} onClose={onCloseImageModal} />);
          };

          resolve(image);
        };
        img.src = url;
      });
    };

    const loadImages = async () => {
      const nextImages = [];

      for (const url of urls) {
        const image = await loadImage(url);
        nextImages.push(image);

        if (nextImages.length === urls.length) {
          setImages(nextImages);
        }
      }
    };

    loadImages();

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []); */

  return (
    <AnimatePresence>
      <Router>
        <List path={'/'} />
        <Trip path={'/trip/:id'} />
        <Photo path={'/photo/:id'} />
        <Upload path={'/upload-images'} />
      </Router>
    </AnimatePresence>
  );
};

export default App;
