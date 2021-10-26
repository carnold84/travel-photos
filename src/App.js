import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import StoreProvider from './store';

const App = () => {
  return (
    <StoreProvider>
      <Router>
        <Routes />
      </Router>
    </StoreProvider>
  );
};

export default App;
