import { Link } from '@reach/router';
import './AppLink.css';

const AppLink = ({ children, from, to, ...rest }) => {
  return (
    <Link state={{ from, to }} to={to} {...rest}>
      {children}
    </Link>
  );
};

export default AppLink;
