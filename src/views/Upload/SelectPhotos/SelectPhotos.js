import { useRef } from 'react';
import Button from '../../../components/Button';
import { useCreatePhotos } from '../../../hooks/hooks';
import './SelectPhotos.css';

const SelectPhotos = ({ onCancel, onNext, onUpdate, photos }) => {
  const createPhotos = useCreatePhotos();
  const elFileInput = useRef();

  const onChange = async (evt) => {
    const { files } = evt.target;

    if (files) {
      const urls = [];
      for (const file of files) {
        urls.push(URL.createObjectURL(file));
      }

      let nextPhotos = await createPhotos(urls);

      console.log(JSON.stringify(nextPhotos));
      onUpdate(nextPhotos.data);
    }
  };

  const onSelectImages = () => {
    elFileInput.current.click();
  };

  console.log(photos);

  return (
    <div className={'select_photos'}>
      <h2>Choose Photos</h2>
      <div className={'image_input'}>
        <Button onClick={onSelectImages} style={{ width: '100%' }}>
          Select Images
        </Button>
        <input
          multiple={true}
          onChange={onChange}
          ref={elFileInput}
          type={'file'}
        />
      </div>
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
      <div className={'footer'}>
        <Button onClick={onCancel}>Cancel</Button>
        <Button onClick={onNext}>Next</Button>
      </div>
    </div>
  );
};

export default SelectPhotos;
