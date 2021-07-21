import { Location, Router } from '@reach/router';
import { AnimatePresence } from 'framer-motion';

import './routes.css';
import { useFetchInitialData, useStore } from './hooks';
import List from './views/List';
import Collection from './views/Collection';
import { useEffect } from 'react';
import Photo from './views/Photo/Photo';

const Routes = () => {
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

  return (
    <Location>
      {({ location }) => (
        <>
          <AnimatePresence initial={false}>
            <Router key={location.pathname} location={location}>
              <List exact={true} path={'/'} />
              <Collection exact={true} path={'/collection/:collectionId'} />
              <Photo
                exact={true}
                path={'/collection/:collectionId/photo/:id'}
              />
            </Router>
          </AnimatePresence>
        </>
      )}
    </Location>
  );
};

export default Routes;
