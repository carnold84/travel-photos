import { useParams } from '@reach/router';
import { useMemo } from 'react';
import Map from '../../components/Map';
import { useCollection } from '../../hooks';
import './Collection.css';

const Collection = ({ showPhoto }) => {
  const params = useParams();
  const collectionId = params?.collectionId;
  const collection = useCollection(collectionId);

  const markers = useMemo(() => {
    return collection?.photos.map(({ id, latitude, longitude }) => {
      return {
        id,
        latitude,
        longitude,
        onClick: () => {
          showPhoto(id);
        },
      };
    });
  }, [collection, showPhoto]);

  if (!collection) {
    return "Collection doesn't exist.";
  }

  return (
    <>
      <Map markers={markers} />
    </>
  );
};

export default Collection;
