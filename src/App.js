import { Location } from '@reach/router';
import Routes from './routes';
import StoreProvider from './store';

const App = () => {
  return (
    <StoreProvider>
      <Location>{({ location }) => <Routes location={location} />}</Location>
    </StoreProvider>
  );
};

export default App;
