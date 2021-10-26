import { Router, useLocation } from '@reach/router';
import { AnimatePresence } from 'framer-motion';

import './routes.css';
import { useFetchInitialData, useStore } from './hooks';
import List from './views/List';
import Collection from './views/Collection';
import { useEffect } from 'react';
import Photo from './views/Photo/Photo';
import Upload from './views/Upload';
import { useRoutesData } from './hooks/hooks';

const Routes = () => {
  const { state } = useStore();
  const location = useLocation();
  const fetchInitialData = useFetchInitialData();
  const [routesData, setRoutesData] = useRoutesData();

  useEffect(() => {
    if (state.isLoading) {
      fetchInitialData();
    }
  }, [fetchInitialData, state.isLoading]);

  useEffect(() => {
    setRoutesData({
      current: location.pathname,
    });
  }, []);

  if (state.isLoading) {
    return 'Loading...';
  }

  return (
    <AnimatePresence initial={false}>
      <Router key={location.pathname} location={location}>
        <List exact={true} path={'/'} />
        <Upload exact={true} path={'/upload'} />
        <Collection exact={true} path={'/collection/:collectionId'} />
        <Photo exact={true} path={'/collection/:collectionId/photo/:id'} />
      </Router>
    </AnimatePresence>
  );
};

export default Routes;
