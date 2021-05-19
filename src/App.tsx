import GlobalStyles from './global-styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import Home from './pages/home';
import Login from './pages/login';

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route exact path={ROUTES.LOGIN}>
        <Login />
      </Route>
    </Router>
  );
};

export default App;
