import { createPhotos, loadPhoto } from '../../../api';
import './SelectPhotos.css';

const SelectPhotos = ({ onBack, onCancel, photos, setPhotos }) => {
  const loadPhotos = async (urls) => {
    let nextPhotos = [...photos, ...createPhotos(urls)];
    setPhotos(nextPhotos);

    for (const image of nextPhotos) {
      const imageData = await loadPhoto(image.url);

      nextPhotos = nextPhotos.map((element) => {
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

      setPhotos(nextPhotos);
    }
  };

  const onChange = async (evt) => {
    const { files } = evt.target;

    if (files) {
      const urls = [];
      for (const file of files) {
        urls.push(URL.createObjectURL(file));
      }

      await loadPhotos(urls);
    }
  };

  return (
    <div>
      <h2>Choose Photos</h2>
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
      <button onClick={onBack}>Next</button>
    </div>
  );
};

export default SelectPhotos;
