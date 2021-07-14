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

export const loadPhoto = async (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = async () => {
      console.log(await exifr.parse(url));
      let { CreateDate, ImageHeight, ImageWidth, latitude, longitude } =
        (await exifr.parse(url)) || {};
      let data;

      if (latitude && longitude) {
        const location = await getLocation({ latitude, longitude });
        console.log(location);
        data = {
          created: CreateDate,
          latitude,
          location,
          longitude,
          origHeight: ImageHeight,
          origWidth: ImageWidth,
        };
      }

      resolve(data);
    };
    img.src = url;
  });
};

export const createPhotos = (urls) => {
  return urls.map((url) => {
    const image = {
      id: uuidV4(),
      isLoaded: false,
      url,
    };

    return image;
  });
};

export const createTrip = ({ photos, trip }) => {
  const { allPhotosIds, photosById } = createPhotos(photos);

  const nextTrip = {
    ...trip,
    id: uuidV4(),
    photos: allPhotosIds.map((id) => {
      return photosById[id];
    }),
  };

  console.log(nextTrip);

  return nextTrip;
};
