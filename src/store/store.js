import { createContext, useReducer } from 'react';

export const ACTIONS = {
  CREATE_COLLECTION: 'createCollection',
  SET_INITIAL_DATA: 'setInitialData',
  SET_MAP_POSITION: 'setMapPosition',
  UPDATE_COLLECTION: 'updateCollection',
};

const initialState = {
  collections: {
    allIds: [],
    byId: [],
  },
  isLoading: true,
  mapPosition: {
    bounds: null,
    center: null,
    zoom: null,
  },
  photos: {
    allIds: [],
    byId: [],
  },
};

const setInitialDataReducer = (state, { collections }) => {
  const allCollectionsIds = [];
  const allPhotosIds = [];
  const collectionsById = {};
  const photosById = {};

  collections.forEach((collection) => {
    allCollectionsIds.push(collection.id);
    collectionsById[collection.id] = {
      ...collection,
      photos: collection.photos.map(({ id }) => {
        return id;
      }),
    };

    collection.photos.forEach((photo) => {
      allPhotosIds.push(photo.id);
      photosById[photo.id] = photo;
    });
  });

  return {
    ...state,
    collections: {
      allIds: allCollectionsIds,
      byId: collectionsById,
    },
    isLoading: false,
    photos: {
      allIds: allPhotosIds,
      byId: photosById,
    },
  };
};

const createCollectionReducer = (state, collection) => {
  const photosById = {};
  const photosIds = collection.photos.map((photo) => {
    photosById[photo.id] = photo;

    return photo.id;
  });

  return {
    ...state,
    collections: {
      allIds: [...state.collections.allIds, collection.id],
      byId: {
        ...state.collections.byId,
        [collection.id]: {
          ...collection,
          photos: photosIds,
        },
      },
    },
    photos: {
      allIds: [...state.photos.allIds, ...photosIds],
      byId: {
        ...state.photos.byId,
        ...photosById,
      },
    },
  };
};

const updateCollectionReducer = (state, collection) => {
  const photosById = {};
  const allPhotosIds = collection.photos.map((photo) => {
    photosById[photo.id] = photo;

    return photo.id;
  });

  return {
    ...state,
    collections: {
      ...state.collections,
      byId: {
        ...state.collections.byId,
        [collection.id]: collection,
      },
    },
    photos: {
      // use Set to dedupe
      allIds: new Set([...state.photos.allIds, ...allPhotosIds]),
      byId: {
        ...state.photos.byId,
        ...photosById,
      },
    },
  };
};

const setMapPositionReducer = (state, mapPosition) => {
  return {
    ...state,
    mapPosition,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CREATE_COLLECTION:
      return createCollectionReducer(state, action.payload);

    case ACTIONS.SET_INITIAL_DATA:
      return setInitialDataReducer(state, action.payload);

    case ACTIONS.SET_MAP_POSITION:
      return setMapPositionReducer(state, action.payload);

    case ACTIONS.UPDATE_COLLECTION:
      return updateCollectionReducer(state, action.payload);

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
