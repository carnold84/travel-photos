import { Location } from '@reach/router';
import './App.css';

import Routes from './Routes';
import StoreProvider from './store';

const App = () => {
  return (
    <StoreProvider>
      <Location>
        {({ location }) => {
          return <Routes location={location} />;
        }}
      </Location>
    </StoreProvider>
  );
};

export default App;
