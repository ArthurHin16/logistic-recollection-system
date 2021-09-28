import { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LoginRoute } from './pages/login.route';
import { CoordinatorRoute } from './pages/coordinator.route';

export const App: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
        <Switch>
          <Route path='/' exact component = { LoginRoute }/>
          <Route path='/coordinator' component = {CoordinatorRoute}/>
        </Switch>
    </BrowserRouter>
  );
}

