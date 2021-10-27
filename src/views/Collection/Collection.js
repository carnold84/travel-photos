import { useHistory, useLocation, useParams } from 'react-router-dom';
import { useEffect, useMemo, useRef } from 'react';
import Layout from '../../components/Layout';
import Map from '../../components/Map';
import View from '../../components/View';
import { useCollection } from '../../hooks';
import { useMapPosition } from '../../hooks';
import './Collection.css';
//import { useRoutesData } from '../../hooks/hooks';

const Collection = () => {
  const history = useHistory();
  const params = useParams();
  const location = useLocation();
  //const [routesData, setRoutesData] = useRoutesData();
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
          const to = `/collection/${collection.id}/photo/${id}`;
          /* setRoutesData({
            current: to,
            previous: routesData.current,
          }); */
          history.push(to);
        },
      };
    });
  }, [collection, history]);

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

  /* let isOver = true;
  if (
    routesData.current?.includes('photo') ||
    routesData.previous?.includes('photo')
  ) {
    isOver = false;
  } */

  return (
    <View id={'collection'} level={1} /* isOver={isOver} */>
      <Layout
        backTo={'/'}
        from={location?.path}
        id={'collection'}
        noContentPadding={true}
        title={collection?.name}>
        {content}
      </Layout>
    </View>
  );
};

export default Collection;
