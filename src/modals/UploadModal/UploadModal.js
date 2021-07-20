import { useNavigate } from '@reach/router';
import { useState } from 'react';
import { useCreateCollection, useUpdateCollection } from '../../hooks';
import Modal from '../../components/Modal';
import SelectPhotos from './SelectPhotos';
import SelectCollection from './SelectCollection';
import './UploadModal.css';

const STEPS = {
  PHOTOS: 'photos',
  COLLECTION: 'collection',
};

const UploadModal = ({ onClose }) => {
  const [step, setStep] = useState(STEPS.PHOTOS);
  const [photos, setPhotos] = useState([]);
  const createCollection = useCreateCollection();
  const updateCollection = useUpdateCollection();

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

    onClose();
  };

  return (
    <Modal id={'photo-modal'} onClose={onClose} title={'Add Photos'}>
      {step === STEPS.PHOTOS && (
        <SelectPhotos
          onCancel={onClose}
          onNext={onGoToCollection}
          onUpdate={onUpdatePhotos}
          photos={photos}
        />
      )}
      {step === STEPS.COLLECTION && (
        <SelectCollection
          onBack={onGoToPhotos}
          onCancel={onClose}
          onSave={onSave}
        />
      )}
    </Modal>
  );
};

export default UploadModal;
