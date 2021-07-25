import { navigate } from '@reach/router';
import { motion } from 'framer-motion';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import PhotoCard from '../../components/PhotoCard';
import { useCollections } from '../../hooks';
import './List.css';

const List = () => {
  const collections = useCollections();

  return (
    <motion.div
      animate={{ scale: 1, transition: { ease: 'easeOut', duration: 0.3 } }}
      exit={{ scale: 1, transition: { ease: 'easeIn', duration: 0.3 } }}
      initial={{ scale: 1 }}
      style={{
        height: '100%',
        width: '100%',
        position: 'absolute',
        zIndex: 0,
      }}>
      <Layout
        id={'list'}
        leftControls={
          <>
            <svg
              className={'list-logo'}
              viewBox="0 0 32 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.88336 32.2825C10.2234 35.0612 12.7884 37.6424 15.5523 40C18.3586 37.6063 20.9597 34.9822 23.3285 32.1549C26.8833 27.9092 31.1048 21.586 31.1048 15.5606C31.116 12.028 29.9172 8.61721 27.7374 5.88181L24.931 9.61367C26.0243 11.3329 26.6586 13.3727 26.6612 15.5606C26.6612 18.149 25.4903 22.6347 19.9203 29.3111C18.5456 30.9482 17.0877 32.5137 15.5524 34.0012C14.0171 32.5119 12.5599 30.9442 11.1866 29.3044C10.9963 29.0767 10.8111 28.8516 10.631 28.6289L7.88336 32.2825ZM7.78018 24.7052L4.95393 28.4634C2.31149 24.641 1.96329e-06 20.0193 1.96329e-06 15.5606C-0.00314886 9.26755 3.78644 3.59282 9.6004 1.18444C14.508 -0.848468 20.0414 -0.215845 24.3225 2.7083L21.6412 6.27371C19.8927 5.1242 17.8007 4.45447 15.5524 4.45178C9.42016 4.45912 4.45088 9.42841 4.44353 15.5606C4.44353 17.503 5.10181 20.511 7.78018 24.7052Z"
                fill="url(#paint0_linear)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="26.0816"
                  y1="4.41393e-07"
                  x2="6.37548"
                  y2="34.1959"
                  gradientUnits="userSpaceOnUse">
                  <stop stopColor="#951CCE" />
                  <stop offset="1" stopColor="#C92DB9" />
                </linearGradient>
              </defs>
            </svg>
            <h1 className="list-title">Travel Photos</h1>
          </>
        }
        rightControls={
          <Button
            onClick={() => navigate('/upload')}
            style={{ height: '40px', width: '40px' }}
            title={'Upload'}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 14 14"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8V14H6V8H0V6H6V0H8V6H14V8H8Z" />
            </svg>
          </Button>
        }>
        {collections.length === 0 && <p>No collections</p>}
        {collections.length > 0 && (
          <div className={'list-grid'}>
            {collections.map(({ id, name, photos }) => {
              const numPhotos = photos.length;

              return (
                <PhotoCard
                  key={id}
                  meta={
                    numPhotos === 1
                      ? `${numPhotos} photo`
                      : `${numPhotos} photos`
                  }
                  imageUrl={photos[0]?.thumbUrl}
                  title={name}
                  to={`/collection/${id}`}
                />
              );
            })}
          </div>
        )}
      </Layout>
    </motion.div>
  );
};

export default List;
