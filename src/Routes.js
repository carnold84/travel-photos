import { Router } from '@reach/router';
import { AnimatePresence } from 'framer-motion';

import { useFetchInitialData, useStore } from './hooks';
import List from './views/List';
import Collection from './views/Collection';
import Upload from './views/Upload';
import { useEffect } from 'react';

const Routes = ({ location }) => {
  const { state } = useStore();
  const fetchInitialData = useFetchInitialData();

  useEffect(() => {
    if (state.isLoading) {
      fetchInitialData();
    }
  }, [fetchInitialData, state.isLoading]);

  return (
    <AnimatePresence exitBeforeEnter={true}>
      <Router
        basepath={process.env.PUBLIC_URL}
        key={location.key}
        location={location}>
        <List exact={true} path={'/'} />
        <Collection path={'/collection/:collectionId'} />
        <Upload path={'/upload-images'} />
      </Router>
    </AnimatePresence>
  );
};

export default Routes;
