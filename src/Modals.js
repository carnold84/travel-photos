import { navigate, useLocation } from '@reach/router';
import { AnimatePresence } from 'framer-motion';

import ImageModal from './components/ImageModal';

const Modals = () => {
  const location = useLocation();
  const queries = new URLSearchParams(location.search);
  const photoId = queries.get('photoId');

  const onClose = () => {
    navigate(-1);
  };

  return (
    <AnimatePresence exitBeforeEnter={true}>
      {photoId && (
        <ImageModal key={'image'} onClose={onClose} photoId={photoId} />
      )}
    </AnimatePresence>
  );
};

export default Modals;