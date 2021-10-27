import { useLocation, useParams } from 'react-router-dom';
import { useMemo } from 'react';
import Layout from '../../components/Layout';
import View from '../../components/View';
import { usePhoto } from '../../hooks';
import './Photo.css';
import Picture from '../../components/Picture';

const Photo = () => {
  const params = useParams();
  const location = useLocation();
  const initialPhoto = usePhoto(params?.id);
  const photo = useMemo(() => {
    return initialPhoto;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let content = 'Photo not found';

  if (photo) {
    content = <Picture alt={''} url={photo?.url} />;
  }

  return (
    <View id={'photo'} level={2}>
      <Layout
        backTo={`/collection/${params?.collectionId}`}
        from={location.pathname}
        id={'photo'}
        title={photo?.name}>
        <div className={'photo-content'}>{content}</div>
      </Layout>
    </View>
  );
};

export default Photo;
