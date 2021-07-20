import { Location, Router } from '@reach/router';
import { AnimatePresence } from 'framer-motion';

import './routes.css';
import { useFetchInitialData, useStore } from './hooks';
import List from './views/List';
import Collection from './views/Collection';
import Upload from './views/Upload';
import { useEffect, useState } from 'react';
import PhotoModal from './modals/PhotoModal';
import UploadModal from './modals/UploadModal';

const Routes = () => {
  const [modal, setModal] = useState(null);
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
    setModal({
      id,
      type: 'photo',
    });
  };

  const showUpload = () => {
    setModal({
      type: 'upload',
    });
  };

  const onClose = () => {
    setModal(null);
  };

  return (
    <Location>
      {({ location }) => (
        <>
          <AnimatePresence exitBeforeEnter={true} initial={false}>
            <Router
              basepath={process.env.PUBLIC_URL}
              className={'router'}
              key={location.pathname}
              location={location}>
              <List exact={true} path={'/'} showUpload={showUpload} />
              <Collection
                exact={true}
                path={'/collection/:collectionId'}
                showPhoto={showPhoto}
              />
            </Router>
          </AnimatePresence>
          <AnimatePresence>
            {modal?.type === 'photo' && (
              <PhotoModal key={'image'} onClose={onClose} photoId={modal.id} />
            )}
            {modal?.type === 'upload' && (
              <UploadModal key={'upload'} onClose={onClose} />
            )}
          </AnimatePresence>
        </>
      )}
    </Location>
  );
};

export default Routes;
