import { useContext } from 'react';
import { ACTIONS, StoreContext } from '../store';

export const useStore = () => {
  const store = useContext(StoreContext);

  return store;
};

const getTrip = (state, tripId) => {
  const trip = state.trips.byId[tripId];

  if (!trip) {
    return;
  }

  return {
    ...trip,
    photos: trip.photos.map((id) => {
      return state.photos.byId[id];
    }),
  };
};

export const useTrip = (tripId) => {
  const { state } = useStore();

  return getTrip(state, tripId);
};

export const useTrips = () => {
  const { state } = useStore();

  return state.trips.allIds.map((id) => {
    return getTrip(state, id);
  });
};

export const usePhoto = (photoId) => {
  const { state } = useStore();

  console.log('usePhoto', photoId);

  return state.photos.byId[photoId];
};

export const useCreateTrip = () => {
  const { dispatch } = useStore();

  const createTrip = (trip) => {
    dispatch({ payload: trip, type: ACTIONS.CREATE_TRIP });
  };

  return createTrip;
};

export const useAddPhotos = () => {
  const { dispatch } = useStore();

  const addPhotos = (photos, tripId) => {
    dispatch({ payload: { photos, id: tripId }, type: ACTIONS.ADD_PHOTOS });
  };

  return addPhotos;
};
