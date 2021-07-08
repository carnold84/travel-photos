import { useParams } from '@reach/router';
import Map from '../../components/Map';
import './Trip.css';

const Trip = () => {
  const { id } = useParams();
  const trip = {
    id: '3',
    name: 'Trip 3',
    photos: [
      {
        address: {
          city: 'Phoenix',
          country: 'US',
          suburb: 'Test',
          town: 'Alberquque',
        },
        id: '1',
        latitude: [0, 0],
        longitude: [0, 0],
        url: '/images/image1.jpg',
      },
      {
        address: {
          city: 'Phoenix',
          country: 'US',
          suburb: 'Test',
          town: 'Alberquque',
        },
        id: '2',
        latitude: 0,
        longitude: 0,
        url: '/images/image2.jpg',
      },
      {
        address: {
          city: 'Phoenix',
          country: 'US',
          suburb: 'Test',
          town: 'Alberquque',
        },
        id: '3',
        latitude: 0,
        longitude: 0,
        url: '/images/image3.jpg',
      },
    ],
  };
  const urls = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg',
    '/images/image5.jpg',
    '/images/image6.jpg',
    '/images/image7.jpg',
    '/images/image8.jpg',
    '/images/image9.jpg',
    '/images/image10.jpg',
  ];
  console.log(id);
  return <Map markers={trip.photos} />;
};

export default Trip;
