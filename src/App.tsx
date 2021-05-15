import GlobalStyles from './global-styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Route exact path={ROUTES.HOME}></Route>
    </Router>
  );
};

export default App;
