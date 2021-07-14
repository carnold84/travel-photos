import { useParams } from '@reach/router';
import { useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ImageModal from '../../components/ImageModal';
import Map from '../../components/Map';
import { useTrip } from '../../hooks';
import './Trip.css';

const Trip = () => {
  const params = useParams();
  const tripId = params?.tripId;
  const trip = useTrip(tripId);
  const [selectedPhotoId, setSelectedPhotoId] = useState();

  const onClose = () => {
    setSelectedPhotoId(null);
  };

  const markers = useMemo(() => {
    return trip?.photos.map(({ id, latitude, longitude }) => {
      return {
        id,
        latitude,
        longitude,
        onClick: () => {
          setSelectedPhotoId(id);
        },
      };
    });
  }, [trip]);

  if (!trip) {
    return "Trip doesn't exist.";
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

export default Trip;
