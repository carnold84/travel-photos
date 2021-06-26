import { useEffect, useRef, useState } from 'react';
import exifr from 'exifr';
import './App.css';
import { createPortal } from 'react-dom';
import ImageModal from './components/ImageModal';
import Map from './components/Map';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const elPortal = useRef();
  const [images, setImages] = useState();
  const [selectedImage, setSelectedImage] = useState(null);
  const [modal, setModal] = useState(null);
  const [sizes, setSizes] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const urls = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg',
    '/images/image5.jpg',
    '/images/image6.jpg',
    '/images/image7.jpg',
    '/images/image8.jpg',
    '/images/image9.jpg',
    '/images/image10.jpg',
  ];

  const onResize = () => {
    setSizes({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  useEffect(() => {
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
  }, []);

  if (!images) {
    return 'loading...';
  }

  console.log(selectedImage);

  return (
    <AnimatePresence>
      <div className={'app'} key={'app'}>
        <Map height={sizes.height} markers={images} width={sizes.width} />
      </div>
      <div key={'portal'} ref={elPortal} />
      {modal && createPortal(modal, elPortal.current)}
    </AnimatePresence>
  );
};

export default App;
