import { Location } from '@reach/router';
import Routes from './Routes';
import StoreProvider from './store';

const App = () => {
  return (
    <StoreProvider>
      <Location>{({ location }) => <Routes />}</Location>
    </StoreProvider>
  );
};

export default App;
