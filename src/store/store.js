import { createContext, useReducer } from 'react';
import { v4 } from 'uuid';

export const ACTIONS = {
  CREATE_TRIP: 'createTrip',
  ADD_PHOTOS: 'addPhotos',
};

const initialState = {
  photos: {
    allIds: [],
    byId: [],
  },
  trips: {
    allIds: [],
    byId: [],
  },
};

const createPhotos = (photos) => {
  const photosById = {};
  const allPhotosIds = photos.map((photo) => {
    const nextPhoto = {
      ...photo,
      id: v4(),
    };

    photosById[nextPhoto.id] = nextPhoto;

    return nextPhoto.id;
  });

  console.log(allPhotosIds);

  return {
    allPhotosIds,
    photosById,
  };
};

const createTrip = (state, { photos, trip }) => {
  const { allPhotosIds, photosById } = createPhotos(photos);
  console.log(allPhotosIds, photosById);
  const nextTrip = {
    ...trip,
    id: v4(),
    photos: allPhotosIds,
  };

  console.log(nextTrip);

  return {
    ...state,
    photos: {
      allIds: [...state.photos.allIds, ...allPhotosIds],
      byId: {
        ...state.photos.byId,
        ...photosById,
      },
    },
    trips: {
      allIds: [...state.trips.allIds, nextTrip.id],
      byId: {
        ...state.trips.byId,
        [nextTrip.id]: nextTrip,
      },
    },
  };
};

const reducer = (state, action) => {
  let nextTrip;

  switch (action.type) {
    case ACTIONS.CREATE_TRIP:
      return createTrip(state, action.payload);

    case ACTIONS.ADD_PHOTOS:
      nextTrip = state.trips.byId[action.payload.id];

      if (nextTrip) {
        const { allPhotosIds, photosById } = createPhotos(
          action.payload.photos
        );
        nextTrip = {
          ...nextTrip,
          photos: [...nextTrip.photos, ...allPhotosIds],
        };

        return {
          ...state,
          photos: {
            allIds: [...state.photos.allIds, ...allPhotosIds],
            byId: {
              ...state.photos.byId,
              ...photosById,
            },
          },
          trips: {
            ...state.trips,
            byId: {
              ...state.trips.byId,
              [nextTrip.id]: nextTrip,
            },
          },
        };
      }

      return state;

    default:
      throw new Error();
  }
};

export const StoreContext = createContext(initialState);

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ dispatch, state }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
