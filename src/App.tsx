import GlobalStyles from './global-styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import Home from './pages/home';

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
    </Router>
  );
};

export default App;
