import { navigate, useParams } from '@reach/router';
import { useEffect, useMemo, useRef } from 'react';
import Layout from '../../components/Layout';
import Map from '../../components/Map';
import View from '../../components/View';
import { useCollection } from '../../hooks';
import { useMapPosition } from '../../hooks';
import './Collection.css';

const Collection = ({ location }) => {
  const params = useParams();
  const collectionId = params?.collectionId;
  const initialCollection = useCollection(collectionId);
  // store collection so it still show when closing
  const collection = useMemo(() => {
    return initialCollection;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const mapRef = useRef();
  const [mapPosition, setMapPosition] = useMapPosition();

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

  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      const map = mapRef.current;
      if (map) {
        setMapPosition({
          bounds: map.getBounds(),
          center: map.getCenter(),
          zoom: map.getZoom(),
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let content;

  if (collection) {
    content = <Map markers={markers} position={mapPosition} ref={mapRef} />;
  } else {
    content = <div>Collection doesn't exist.</div>;
  }

  return (
    <View level={1}>
      <Layout
        backTo={'/'}
        from={location.pathname}
        id={'collection'}
        noContentPadding={true}
        title={collection?.name}>
        {content}
      </Layout>
    </View>
  );
};

export default Collection;
