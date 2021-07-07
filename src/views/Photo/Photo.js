import { useParams } from '@reach/router';
import './Photo.css';

const Photo = () => {
  const { id } = useParams();
  return `Photo ${id}`;
};

export default Photo;
