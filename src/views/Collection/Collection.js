import { navigate, useParams } from '@reach/router';
import { useMemo } from 'react';
import Button from '../../components/Button';
import Map from '../../components/Map';
import View from '../../components/View';
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

  console.log(collection);

  return (
    <View
      id={'collection'}
      key={'collection'}
      noContentPadding={true}
      onBack={() => navigate('/')}
      title={collection?.name}>
      <Map markers={markers} />
    </View>
  );
};

export default Collection;
