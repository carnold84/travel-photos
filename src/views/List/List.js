import { Link } from '@reach/router';
import './List.css';

const List = () => {
  const trips = [
    { id: '1', name: 'Trip 1' },
    { id: '2', name: 'Trip 2' },
    { id: '3', name: 'Trip 3' },
    { id: '4', name: 'Trip 4' },
  ];

  return (
    <>
      <Link to={'/upload-images'}>Upload</Link>
      <ul>
        {trips.map(({ id, name }) => {
          return (
            <li key={id}>
              <Link to={`/trip/${id}`}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default List;
