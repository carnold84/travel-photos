import { useNavigate } from '@reach/router';
import { useState } from 'react';
import { createImages, loadImage } from '../../api/api';
import { useCreateTrip } from '../../hooks';
import './Upload.css';

const Upload = () => {
  const navigate = useNavigate();
  const [photos, setPhotos] = useState();
  const createTrip = useCreateTrip();

  const loadImages = async (urls) => {
    let nextImages = createImages(urls);
    setPhotos(nextImages);

    for (const image of nextImages) {
      const imageData = await loadImage(image.url);

      nextImages = nextImages.map((element) => {
        if (image.id === element.id) {
          if (imageData) {
            return {
              ...element,
              ...imageData,
              isLoaded: true,
            };
          } else {
            return {
              ...element,
              isLoaded: true,
            };
          }
        }
        return element;
      });

      setPhotos(nextImages);
    }
  };

  const onChange = async (evt) => {
    const { files } = evt.target;

    if (files) {
      const urls = [];
      for (const file of files) {
        urls.push(URL.createObjectURL(file));
      }

      await loadImages(urls);
    }
  };

  const onCancel = async () => {
    navigate('/', { replace: true });
  };

  const onSave = async (evt) => {
    createTrip({
      name: 'Test',
      photos: photos,
    });

    navigate('/', { replace: true });
  };

  return (
    <div>
      <input multiple={true} onChange={onChange} type={'file'} />
      <div>
        {photos &&
          photos.map((image) => {
            if (image.isLoaded) {
              const { id, location, name, url } = image;
              if (location) {
                return (
                  <img
                    alt={name}
                    key={id}
                    src={url}
                    style={{ width: '140px' }}
                  />
                );
              }
              return 'No location data';
            }
            return 'Loading...';
          })}
      </div>
      <button onClick={onCancel}>Cancel</button>
      <button onClick={onSave}>Upload Files</button>
    </div>
  );
};

export default Upload;
