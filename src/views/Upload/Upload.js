import { useNavigate } from '@reach/router';
import { useState } from 'react';
import { useAddPhotos, useCreateTrip } from '../../hooks';
import SelectPhotos from './SelectPhotos';
import SelectTrip from './SelectTrip';
import './Upload.css';

const STEPS = {
  PHOTOS: 'photos',
  TRIP: 'trip',
};

const Upload = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(STEPS.PHOTOS);
  const [photos, setPhotos] = useState([]);
  const createTrip = useCreateTrip();
  const addPhotos = useAddPhotos();

  const onCancel = async () => {
    navigate('/', { replace: true });
  };

  const onGoToPhotos = () => {
    setStep(STEPS.PHOTOS);
  };

  const onGoToTrip = () => {
    setStep(STEPS.TRIP);
  };

  const onSave = async (tripId, tripName) => {
    if (tripId) {
      addPhotos(photos, tripId);
    } else {
      createTrip({
        photos,
        trip: {
          name: tripName,
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
          onNext={onGoToTrip}
          photos={photos}
          setPhotos={setPhotos}
        />
      )}
      {step === STEPS.TRIP && (
        <SelectTrip onBack={onGoToPhotos} onCancel={onCancel} onSave={onSave} />
      )}
    </div>
  );
};

export default Upload;
