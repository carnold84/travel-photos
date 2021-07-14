import { Location, navigate, Router, useParams } from '@reach/router';
import { AnimatePresence } from 'framer-motion';

import ImageModal from './components/ImageModal';
import List from './views/List';
import Trip from './views/Trip';
import Upload from './views/Upload';

const Routes = ({ location }) => {
  return (
    <AnimatePresence exitBeforeEnter={true}>
      <Router
        basepath={process.env.PUBLIC_URL}
        key={location.key}
        location={location}>
        <List exact={true} path={'/'} />
        <Trip path={'/trip/:tripId'} />
        <Upload path={'/upload-images'} />
      </Router>
    </AnimatePresence>
  );
};

export default Routes;
