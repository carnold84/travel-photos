import { useState } from 'react';
import { navigate } from '@reach/router';
import { useCreateCollection, useUpdateCollection } from '../../hooks';
import SelectPhotos from './SelectPhotos';
import SelectCollection from './SelectCollection';
import View from '../../components/View';
import Layout from '../../components/Layout';
import './Upload.css';

const STEPS = {
  PHOTOS: 'photos',
  COLLECTION: 'collection',
};

const Upload = ({ onClose }) => {
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
    console.log(data);
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
    <View level={2}>
      <Layout
        id={'upload'}
        noContentPadding={true}
        onBack={() => navigate('/')}
        title={'Add Photos'}>
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
      </Layout>
    </View>
  );
};

export default Upload;
