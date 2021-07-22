import { useParams } from '@reach/router';
import { useMemo } from 'react';
import Layout from '../../components/Layout';
import View from '../../components/View';
import { usePhoto } from '../../hooks';
import './Photo.css';

const Photo = ({ location }) => {
  const params = useParams();
  const initialPhoto = usePhoto(params?.id);
  const photo = useMemo(() => {
    return initialPhoto;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let content = 'Photo not found';

  if (photo) {
    content = <img className={'photo-img'} alt={''} src={photo?.url} />;
  }

  return (
    <View level={2}>
      <Layout
        backTo={`/collection/${params?.collectionId}`}
        from={location.pathname}
        id={'photo'}
        title={photo?.name}>
        {content}
      </Layout>
    </View>
  );
};

export default Photo;
