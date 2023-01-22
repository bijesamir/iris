import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Home } from '../Pages/Home/Home';
import { TaskingSearch } from '../Pages/TaskingSearch/';

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <TaskingSearch />
        </Route>
       
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
