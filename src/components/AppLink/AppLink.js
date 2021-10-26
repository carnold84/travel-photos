import { Link } from 'react-router-dom';
import { useRoutesData } from '../../hooks/hooks';
import './AppLink.css';

const AppLink = ({ children, to, ...rest }) => {
  const [routesData, setRoutesData] = useRoutesData();

  const onClick = () => {
    setRoutesData({
      current: to,
      previous: routesData.current,
    });
  };

  return (
    <Link onClick={onClick} to={to} {...rest}>
      {children}
    </Link>
  );
};

export default AppLink;
