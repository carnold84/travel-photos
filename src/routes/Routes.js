import { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import './routes.css';
import { useFetchInitialData, useStore } from '../hooks';
import List from '../views/List';
import Collection from '../views/Collection';
import Photo from '../views/Photo/Photo';
import Upload from '../views/Upload';
import { useRoutesData } from '../hooks/hooks';

const Routes = () => {
  const { state } = useStore();
  const location = useLocation();
  const fetchInitialData = useFetchInitialData();
  //const [routesData, setRoutesData] = useRoutesData();

  useEffect(() => {
    if (state.isLoading) {
      fetchInitialData();
    }
  }, [fetchInitialData, state.isLoading]);

  /* useEffect(() => {
    setRoutesData({
      current: location.pathname,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); */

  if (state.isLoading) {
    return 'Loading...';
  }

  return (
    <AnimatePresence>
      <Switch key={location.pathname} location={location}>
        <Route component={Photo} path={'/collection/:collectionId/photo/:id'} />
        <Route component={Collection} path={'/collection/:collectionId'} />
        <Route component={Upload} path={'/upload'} />
        <Route component={List} path={'/'} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
