import { useNavigate } from '@reach/router';
import { useState } from 'react';
import { createPhotos, loadPhoto } from '../../api';
import { useCreateTrip, useTrips } from '../../hooks';
import SelectPhotos from './SelectPhotos';
import './Upload.css';

const STEPS = {
  PHOTOS: 'photos',
  TRIP: 'trip',
};

const TRIP_TYPE = {
  CHOOSE: 'choose',
  NEW: 'new',
};

const Upload = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(STEPS.PHOTOS);
  const [tripType, setTripType] = useState(TRIP_TYPE.NEW);
  const [photos, setPhotos] = useState([]);
  const trips = useTrips();
  const [selectedTripId, setSelectedTripId] = useState(trips[0]?.id);
  const createTrip = useCreateTrip();

  const loadImages = async (urls) => {
    let nextImages = createPhotos(urls);
    setPhotos(nextImages);

    for (const image of nextImages) {
      const imageData = await loadPhoto(image.url);

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

  const onGoToPhotos = () => {
    setStep(STEPS.PHOTOS);
  };

  const onGoToTrip = () => {
    setStep(STEPS.TRIP);
  };

  const onSave = async (evt) => {
    createTrip({
      name: 'Test',
      photos: photos,
    });

    navigate('/', { replace: true });
  };

  const onTripTypeChange = (evt) => {
    console.log(evt.target.value);
    setTripType(evt.target.value);
  };

  const onTripType = (evt) => {
    console.log(evt.target.value);
    setTripType(evt.target.value);
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
        <>
          <h2>Choose Trip</h2>
          <label htmlFor="new-trip">New Trip:</label>
          <input
            checked={tripType === TRIP_TYPE.NEW}
            id={'new-trip'}
            name={'trip'}
            onChange={onTripTypeChange}
            type={'radio'}
            value={TRIP_TYPE.NEW}
          />
          <label htmlFor="choose-trip">Choose Trip:</label>
          <input
            checked={tripType === TRIP_TYPE.CHOOSE}
            id={'choose-trip'}
            name={'trip'}
            onChange={onTripTypeChange}
            type={'radio'}
            value={TRIP_TYPE.CHOOSE}
          />
          {tripType === TRIP_TYPE.NEW && (
            <div>
              <label htmlFor={'trip-name'}>Trip Name</label>
              <input type={'text'} />
            </div>
          )}
          {tripType === TRIP_TYPE.CHOOSE && (
            <div>
              {trips.map((trip) => {
                return (
                  <input
                    checked={selectedTripId === trip.id}
                    id={'choose-trip'}
                    name={'trip'}
                    onChange={onTripType}
                    type={'radio'}
                    value={TRIP_TYPE.CHOOSE}
                  />
                );
              })}
            </div>
          )}
          <button onClick={onCancel}>Cancel</button>
          <button onClick={onGoToPhotos}>Back</button>
          <button onClick={onSave}>Upload Files</button>
        </>
      )}
    </div>
  );
};

export default Upload;
