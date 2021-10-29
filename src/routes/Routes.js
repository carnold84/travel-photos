import { lazy, Suspense, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import './routes.css';
import { useFetchInitialData, useStore } from '../hooks';
import LoadingScreen from '../components/LoadingScreen';
//import { useRoutesData } from '../hooks/hooks';

const List = lazy(() => import('../views/List'));
const Collection = lazy(() => import('../views/Collection'));
const Photo = lazy(() => import('../views/Photo'));
const Upload = lazy(() => import('../views/Upload'));

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
    return <LoadingScreen />;
  }

  return (
    <AnimatePresence initial={false}>
      <Suspense fallback={<LoadingScreen />}>
        <Switch key={location.pathname} location={location}>
          <Route
            component={Photo}
            path={'/collection/:collectionId/photo/:id'}
          />
          <Route component={Collection} path={'/collection/:collectionId'} />
          <Route component={Upload} path={'/upload'} />
          <Route component={List} path={'/'} />
        </Switch>
      </Suspense>
    </AnimatePresence>
  );
};

export default Routes;
