import { useNavigate } from '@reach/router';
import { useState } from 'react';
import { useCreateCollection, useUpdateCollection } from '../../hooks';
import SelectPhotos from './SelectPhotos';
import SelectCollection from './SelectCollection';
import './Upload.css';

const STEPS = {
  PHOTOS: 'photos',
  COLLECTION: 'collection',
};

const Upload = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(STEPS.PHOTOS);
  const [photos, setPhotos] = useState([]);
  const createCollection = useCreateCollection();
  const updateCollection = useUpdateCollection();

  const onCancel = async () => {
    navigate('/', { replace: true });
  };

  const onGoToPhotos = () => {
    setStep(STEPS.PHOTOS);
  };

  const onGoToCollection = () => {
    setStep(STEPS.COLLECTION);
  };

  const onUpdatePhotos = (data) => {
    setPhotos([...photos, ...data]);
  };

  const onSave = async (id, name) => {
    console.log(id, name);
    if (id) {
      updateCollection({
        photos,
        collection: {
          id,
          name,
        },
      });
    } else {
      createCollection({
        photos,
        collection: {
          name,
        },
      });
    }

    onCancel();
  };

  return (
    <div>
      {step === STEPS.PHOTOS && (
        <SelectPhotos
          onCancel={onCancel}
          onNext={onGoToCollection}
          onUpdate={onUpdatePhotos}
          photos={photos}
        />
      )}
      {step === STEPS.COLLECTION && (
        <SelectCollection
          onBack={onGoToPhotos}
          onCancel={onCancel}
          onSave={onSave}
        />
      )}
    </div>
  );
};

export default Upload;
