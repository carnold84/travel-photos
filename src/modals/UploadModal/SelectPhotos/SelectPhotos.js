import { useCreatePhotos } from '../../../hooks/hooks';
import './SelectPhotos.css';

const SelectPhotos = ({ onCancel, onNext, onUpdate, photos }) => {
  const createPhotos = useCreatePhotos();

  const onChange = async (evt) => {
    const { files } = evt.target;

    if (files) {
      const urls = [];
      for (const file of files) {
        urls.push(URL.createObjectURL(file));
      }

      let nextPhotos = await createPhotos(urls);
      onUpdate(nextPhotos.data);
    }
  };

  console.log(photos);

  return (
    <div>
      <h2>Choose Photos</h2>
      <input multiple={true} onChange={onChange} type={'file'} />
      <div>
        {!photos && 'Loading...'}
        {photos &&
          photos.map((photo) => {
            const { id, location, name, url } = photo;
            if (location) {
              return (
                <img alt={name} key={id} src={url} style={{ width: '140px' }} />
              );
            }
            return 'No location data';
          })}
      </div>
      <button onClick={onCancel}>Cancel</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default SelectPhotos;
