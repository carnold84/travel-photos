import { Link } from '@reach/router';
import { useTrips } from '../../hooks';
import './List.css';

const List = () => {
  const trips = useTrips();

  console.log(trips);

  return (
    <>
      <Link to={'/upload-images'}>Upload</Link>
      {trips.length === 0 && <p>No trips</p>}
      {trips.length > 0 && (
        <ul>
          {trips.map(({ id, name }) => {
            return (
              <li key={id}>
                <Link to={`/trip/${id}`}>{name}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default List;
