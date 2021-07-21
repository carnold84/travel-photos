import exifr from 'exifr';
import { v4 as uuidV4 } from 'uuid';
import demoData from './demo-data.json';

const KEY = 'travel_photos';

const getData = async () => {
  let value = await localStorage.getItem(KEY);
  value = JSON.parse(value);

  return value;
};

const updateData = async (data) => {
  await localStorage.setItem(KEY, JSON.stringify(data));
};

export const fetchInitialData = async () => {
  let data = await getData();

  if (data === null) {
    data = demoData;
    await updateData(data);
  }

  return {
    data,
    success: true,
  };
};

export const createCollection = async (collection) => {
  const nextCollection = {
    ...collection,
    id: uuidV4(),
  };

  const data = await getData();
  updateData({
    ...data,
    collections: [...data.collections, nextCollection],
  });

  return {
    data: nextCollection,
    success: true,
  };
};

export const updateCollection = async ({ collection, photos }) => {
  const nextCollection = {
    ...collection,
    photos: [...collection.photos, ...photos],
  };

  const data = await getData();
  updateData({
    ...data,
    collections: data.collections.map((collection) => {
      if (collection.id === nextCollection.id) {
        return nextCollection;
      }
      return collection;
    }),
  });

  return {
    data: nextCollection,
    success: true,
  };
};

export const createPhotos = async (photoUrls) => {
  const photos = [];

  for (const url of photoUrls) {
    const photo = await createPhoto(url);

    photos.push(photo.data);
  }

  return {
    data: photos,
    success: true,
  };
};

const getLocation = async ({ latitude, longitude }) => {
  return new Promise(async (resolve, reject) => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
    );
    const location = await response.json();
    resolve(location);
  });
};

const createPhoto = async (url) => {
  return new Promise((resolve, reject) => {
    let photo = {
      id: uuidV4(),
      url,
    };

    const img = new Image();
    img.onload = async () => {
      let { CreateDate, ImageHeight, ImageWidth, latitude, longitude } =
        (await exifr.parse(url)) || {};

      if (latitude && longitude) {
        const location = await getLocation({ latitude, longitude });

        const address = [];
        let name = '';
        if (location) {
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

          name = address.join(', ');
        }
        photo = {
          ...photo,
          created: CreateDate,
          latitude,
          location,
          longitude,
          origHeight: ImageHeight,
          origWidth: ImageWidth,
          name,
        };
      }

      resolve({
        data: photo,
        success: true,
      });
    };
    img.src = url;
  });
};
