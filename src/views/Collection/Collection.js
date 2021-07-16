import { useParams } from '@reach/router';
import { useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ImageModal from '../../components/ImageModal';
import Map from '../../components/Map';
import { useCollection } from '../../hooks';
import './Collection.css';

const Collection = () => {
  const params = useParams();
  const collectionId = params?.collectionId;
  const collection = useCollection(collectionId);
  const [selectedPhotoId, setSelectedPhotoId] = useState();

  const onClose = () => {
    setSelectedPhotoId(null);
  };

  const markers = useMemo(() => {
    return collection?.photos.map(({ id, latitude, longitude }) => {
      return {
        id,
        latitude,
        longitude,
        onClick: () => {
          setSelectedPhotoId(id);
        },
      };
    });
  }, [collection]);

  if (!collection) {
    return "Collection doesn't exist.";
  }

  return (
    <>
      <Map markers={markers} />
      <AnimatePresence>
        {selectedPhotoId && (
          <ImageModal
            key={'image'}
            onClose={onClose}
            photoId={selectedPhotoId}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Collection;
