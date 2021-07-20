import { Location } from '@reach/router';

import Routes from './Routes';
import StoreProvider from './store';

const App = () => {
  return (
    <StoreProvider>
      <Routes />
    </StoreProvider>
  );
};

export default App;
