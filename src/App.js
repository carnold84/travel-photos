import { useEffect, useState } from 'react';
import exifr from 'exifr';
import './App.css';
import { createPortal } from 'react-dom';
import ImageModal from './ImageModal';
import Map from './Map';

const App = () => {
  const [images, setImages] = useState();
  const [selectedImage, setSelectedImage] = useState(null);
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
          image.onClick = () => setSelectedImage(image);

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

  const onCloseImageModal = () => {
    setSelectedImage(null);
  };

  console.log(selectedImage);

  return (
    <>
      <div className="app">
        <Map height={sizes.height} markers={images} width={sizes.width} />
      </div>
      {createPortal(
        <ImageModal
          data={selectedImage}
          isVisible={selectedImage !== null}
          onClose={onCloseImageModal}
        />,
        document.querySelector('#portal')
      )}
    </>
  );
};

export default App;
