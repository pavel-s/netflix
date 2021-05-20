import GlobalStyles from './global-styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import Home from './pages/home';
import Login from './pages/login';
import SignUP from './pages/signup';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import Browse from './pages/browse';
import { useAuthUser } from './hooks';

const App = () => {
  const user = useAuthUser();

  return (
    <Router>
      <GlobalStyles />

      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
        <IsUserRedirect
          exact
          path={ROUTES.LOGIN}
          user={user}
          loggedInPath={ROUTES.BROWSE}
        >
          <Login />
        </IsUserRedirect>
        <IsUserRedirect
          exact
          path={ROUTES.SING_UP}
          user={user}
          loggedInPath={ROUTES.BROWSE}
        >
          <SignUP />
        </IsUserRedirect>
        <ProtectedRoute exact path={ROUTES.BROWSE} user={user}>
          <Browse />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
};

export default App;
