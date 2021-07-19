import { Router } from '@reach/router';
import { AnimatePresence } from 'framer-motion';

import { useFetchInitialData, useStore } from './hooks';
import List from './views/List';
import Collection from './views/Collection';
import Upload from './views/Upload';
import { useEffect, useState } from 'react';
import PhotoModal from './modals/PhotoModal';

const Routes = ({ location }) => {
  const [photoId, setPhotoId] = useState(null);
  const { state } = useStore();
  const fetchInitialData = useFetchInitialData();

  useEffect(() => {
    if (state.isLoading) {
      fetchInitialData();
    }
  }, [fetchInitialData, state.isLoading]);

  if (state.isLoading) {
    return 'Loading...';
  }

  const showPhoto = (id) => {
    setPhotoId(id);
  };

  const onClose = () => {
    setPhotoId(null);
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter={true}>
        <Router
          basepath={process.env.PUBLIC_URL}
          key={location?.key}
          location={location}>
          <List exact={true} path={'/'} />
          <Collection
            path={'/collection/:collectionId'}
            showPhoto={showPhoto}
          />
          <Upload path={'/upload-images'} />
        </Router>
      </AnimatePresence>
      <AnimatePresence>
        {photoId && (
          <PhotoModal key={'image'} onClose={onClose} photoId={photoId} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Routes;
