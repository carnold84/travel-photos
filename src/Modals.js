import { useHistory, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import PhotoModal from './modals/PhotoModal';

const Modals = () => {
  const location = useLocation();
  const history = useHistory();
  const queries = new URLSearchParams(location.search);
  const photoId = queries.get('photoId');

  const onClose = () => {
    history.go(-1);
  };

  return (
    <AnimatePresence exitBeforeEnter={true}>
      {photoId && (
        <PhotoModal key={'image'} onClose={onClose} photoId={photoId} />
      )}
    </AnimatePresence>
  );
};

export default Modals;
