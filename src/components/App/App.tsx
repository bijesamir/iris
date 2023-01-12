import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Home } from '../Pages/Home/Home';
import '../..//styles/normalize.css';
import '../../styles/global.css';

export function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </HashRouter>
  );
}
