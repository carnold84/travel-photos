import { useContext, useMemo } from 'react';
import { ACTIONS, StoreContext } from '../store';
import {
  createCollection as createCollectionApi,
  createPhotos as createPhotosApi,
  fetchInitialData as fetchInitialDataApi,
  updateCollection as updateCollectionApi,
} from '../api';

export const useStore = () => {
  const store = useContext(StoreContext);

  return store;
};

export const useFetchInitialData = () => {
  const { dispatch } = useStore();

  const fetchInitialData = async () => {
    const response = await fetchInitialDataApi();

    dispatch({
      payload: response.data,
      type: ACTIONS.SET_INITIAL_DATA,
    });
  };

  return fetchInitialData;
};

const getCollection = (state, collectionId) => {
  const collection = state.collections.byId[collectionId];

  if (!collection) {
    return;
  }

  return {
    ...collection,
    photos: collection.photos.map((id) => {
      return state.photos.byId[id];
    }),
  };
};

export const useCollection = (collectionId) => {
  const { state } = useStore();

  return getCollection(state, collectionId);
};

export const useCollections = () => {
  const { state } = useStore();

  return state.collections.allIds.map((id) => {
    return getCollection(state, id);
  });
};

export const usePhoto = (photoId) => {
  const { state } = useStore();

  return state.photos.byId[photoId];
};

export const useCreatePhotos = () => {
  const createPhotos = async (urls) => {
    return await createPhotosApi(urls);
  };

  return createPhotos;
};

export const useCreateCollection = () => {
  const { dispatch } = useStore();

  const createCollection = async ({ collection, photos }) => {
    const response = await createCollectionApi({
      ...collection,
      photos,
    });

    dispatch({
      payload: response.data,
      type: ACTIONS.CREATE_COLLECTION,
    });
  };

  return createCollection;
};

export const useUpdateCollection = () => {
  const { dispatch, state } = useStore();

  const updateCollection = async (collection, photos) => {
    const response = await updateCollectionApi({
      ...state.collections.byId[collection.id],
      ...collection,
      photos,
    });

    dispatch({
      payload: response.data,
      type: ACTIONS.UPDATE_COLLECTION,
    });
  };

  return updateCollection;
};

export const useMapPosition = () => {
  const { dispatch, state } = useStore();

  const mapPosition = useMemo(() => {
    return state.mapPosition;
  }, [state.mapPosition]);

  const setMapPosition = (position) => {
    dispatch({
      payload: position,
      type: ACTIONS.SET_MAP_POSITION,
    });
  };

  return [mapPosition, setMapPosition];
};

export const useRoutesData = () => {
  const { dispatch, state } = useStore();

  const routesData = useMemo(() => {
    return state.routesData;
  }, [state.routesData]);

  const setRoutesData = (routesData) => {
    dispatch({
      payload: routesData,
      type: ACTIONS.SET_ROUTES_DATA,
    });
  };

  return [routesData, setRoutesData];
};
