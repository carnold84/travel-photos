import exifr from 'exifr';
import { useState } from 'react';
import './Upload.css';

const Upload = () => {
  const [images, setImages] = useState();

  const getLocation = async ({ latitude, longitude }) => {
    return new Promise(async (resolve, reject) => {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      );
      console.log(response);
      const location = await response.json();
      resolve(location);
    });
  };

  const loadImage = async (url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = async () => {
        let { latitude, longitude } = (await exifr.gps(url)) || {};
        let image;
        console.log(latitude, longitude);

        if (latitude && longitude) {
          const location = await getLocation({ latitude, longitude });
          image = {
            id: Date.now(),
            latitude,
            location,
            longitude,
            url,
          };
        }

        resolve(image);
      };
      img.src = url;
    });
  };

  const loadImages = async (urls) => {
    let nextImages = [];

    for (const url of urls) {
      const image = await loadImage(url);
      nextImages.push(image);

      if (nextImages.length === urls.length) {
        nextImages = nextImages.filter((element) => {
          return element !== undefined;
        });
        setImages(nextImages);
      }
    }
  };

  const onChange = async (evt) => {
    const { files } = evt.target;
    console.log(files);

    if (files) {
      const urls = [];
      for (const file of files) {
        console.log(file);
        urls.push(URL.createObjectURL(file));
      }

      console.log(urls);

      await loadImages(urls);
    }
  };
  console.log(images);

  return (
    <div>
      <input multiple={true} onChange={onChange} type={'file'} />
      <div>
        {images &&
          images.map(({ id, name, url }) => {
            return (
              <img alt={name} key={id} src={url} style={{ width: '140px' }} />
            );
          })}
      </div>
    </div>
  );
};

export default Upload;
