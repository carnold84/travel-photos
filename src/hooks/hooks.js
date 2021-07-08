import { useContext } from 'react';
import { ACTIONS, StoreContext } from '../store';

export const useStore = () => {
  const store = useContext(StoreContext);

  return store;
};

export const useTrip = (tripId) => {
  const { state } = useStore();

  return state.trips.filter(({ id }) => {
    return id === tripId;
  })[0];
};

export const useTrips = () => {
  const { state } = useStore();

  return state.trips;
};

export const useCreateTrip = () => {
  const { dispatch } = useStore();

  const createTrip = (trip) => {
    dispatch(ACTIONS.CREATE_TRIP, trip);
  };

  return createTrip;
};

export const useAddPhotos = () => {
  const { dispatch } = useStore();

  const addPhotos = (photos, tripId) => {
    dispatch(ACTIONS.ADD_PHOTOS, { photos, tripId });
  };

  return addPhotos;
};
