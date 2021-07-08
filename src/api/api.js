import exifr from 'exifr';
import { v4 as uuidV4 } from 'uuid';

const getLocation = async ({ latitude, longitude }) => {
  return new Promise(async (resolve, reject) => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
    );
    const location = await response.json();
    resolve(location);
  });
};

export const loadImage = async (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = async () => {
      let { latitude, longitude } = (await exifr.gps(url)) || {};
      let data;

      if (latitude && longitude) {
        const location = await getLocation({ latitude, longitude });
        console.log(location);
        data = {
          latitude,
          location,
          longitude,
        };
      }

      resolve(data);
    };
    img.src = url;
  });
};

export const createImages = (urls) => {
  return urls.map((url) => {
    const image = {
      id: uuidV4(),
      isLoaded: false,
      url,
    };

    return image;
  });
};
