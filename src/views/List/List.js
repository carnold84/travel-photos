import { Link } from '@reach/router';
import { useCollections } from '../../hooks';
import './List.css';

const List = () => {
  const collections = useCollections();

  console.log(collections);

  return (
    <>
      <Link to={'/upload-images'}>Upload</Link>
      {collections.length === 0 && <p>No collections</p>}
      {collections.length > 0 && (
        <ul>
          {collections.map(({ id, name }) => {
            return (
              <li key={id}>
                <Link to={`/collection/${id}`}>{name}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default List;
