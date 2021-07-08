import { createContext, useReducer } from 'react';
import { v4 } from 'uuid';

export const ACTIONS = {
  CREATE_TRIP: 'createTrip',
  ADD_PHOTOS: 'addPhotos',
};

const initialState = {
  trips: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CREATE_TRIP:
      return {
        ...state,
        trips: [
          ...state.trips,
          {
            ...action.payload,
            photos: action.payload.photos.map((photo) => {
              return {
                ...photo,
                id: v4(),
              };
            }),
            id: v4(),
          },
        ],
      };

    case ACTIONS.ADD_PHOTOS:
      const nextTrips = state.trips.map((trip) => {
        if (trip.id === action.payload.id) {
          return {
            ...trip,
            photos: [
              ...trip.photos,
              ...action.payload.photos.map((photo) => {
                return {
                  ...photo,
                  id: v4(),
                };
              }),
            ],
          };
        }
        return trip;
      });

      return {
        ...state,
        trips: nextTrips,
      };

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
