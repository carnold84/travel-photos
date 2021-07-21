import { navigate, useParams } from '@reach/router';
import { useMemo, useState } from 'react';
import Layout from '../../components/Layout';
import Map from '../../components/Map';
import View from '../../components/View';
import { useCollection } from '../../hooks';
import './Collection.css';

const Collection = () => {
  const params = useParams();
  const collectionId = params?.collectionId;
  const initialCollection = useCollection(collectionId);
  const collection = useMemo(() => {
    return initialCollection;
  }, []);

  const markers = useMemo(() => {
    return collection?.photos.map(({ id, latitude, longitude }) => {
      return {
        id,
        latitude,
        longitude,
        onClick: () => {
          navigate(`${collection?.id}/photo/${id}`);
        },
      };
    });
  }, [collection]);

  let content;

  if (collection) {
    content = <Map markers={markers} />;
  } else {
    content = <div>Collection doesn't exist.</div>;
  }

  return (
    <View level={1}>
      <Layout
        id={'collection'}
        noContentPadding={true}
        onBack={() => navigate('/')}
        title={collection?.name}>
        {content}
      </Layout>
    </View>
  );
};

export default Collection;
