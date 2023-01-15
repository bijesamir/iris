import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Home } from '../Pages/Home/Home';


export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
