import { useState } from 'react';
import { useTrips } from '../../../hooks';
import './SelectTrip.css';

const TRIP_TYPE = {
  CHOOSE: 'choose',
  NEW: 'new',
};

const SelectTrip = ({ onBack, onCancel, onSave }) => {
  const [tripType, setTripType] = useState(TRIP_TYPE.NEW);
  const [tripName, setTripName] = useState('');
  const trips = useTrips();
  const [selectedTripId, setSelectedTripId] = useState(trips[0]?.id);

  const onTripTypeChange = (evt) => {
    console.log(evt.target.value);
    setTripType(evt.target.value);
  };

  const onSelectTrip = (evt) => {
    console.log(evt.target.value);
    setSelectedTripId(evt.target.value);
  };

  const onTripNameChange = (evt) => {
    setTripName(evt.target.value);
  };

  const onSavePhotos = () => {
    onSave(selectedTripId, tripName);
  };

  return (
    <div>
      <h2>Choose Trip</h2>
      {trips.length > 0 && (
        <div>
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
        </div>
      )}
      {tripType === TRIP_TYPE.NEW && (
        <div>
          <label htmlFor={'trip-name'}>Trip Name</label>
          <input onChange={onTripNameChange} type={'text'} />
        </div>
      )}
      {tripType === TRIP_TYPE.CHOOSE && (
        <div>
          {trips.map((trip) => {
            return (
              <label htmlFor={trip.id} key={trip.id}>
                <input
                  checked={selectedTripId === trip.id}
                  id={trip.id}
                  name={'trips'}
                  onChange={onSelectTrip}
                  type={'radio'}
                  value={trip.id}
                />
                {trip.name}
              </label>
            );
          })}
        </div>
      )}
      <button onClick={onCancel}>Cancel</button>
      <button onClick={onBack}>Back</button>
      <button onClick={onSavePhotos}>Save Photos</button>
    </div>
  );
};

export default SelectTrip;
