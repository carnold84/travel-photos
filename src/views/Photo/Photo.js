import { navigate, useParams } from '@reach/router';
import { useMemo } from 'react';
import Layout from '../../components/Layout';
import View from '../../components/View';
import { usePhoto } from '../../hooks';
import './Photo.css';

const Photo = () => {
  const params = useParams();
  const initialPhoto = usePhoto(params?.id);
  const photo = useMemo(() => {
    return initialPhoto;
  }, []);

  let content = 'Photo not found';

  if (photo) {
    content = <img className={'photo-img'} alt={''} src={photo?.url} />;
  }

  return (
    <View level={2}>
      <Layout
        id={'photo'}
        onBack={() => navigate(`/collection/${params.collectionId}`)}
        title={photo?.name}>
        {content}
      </Layout>
    </View>
  );
};

export default Photo;
