import { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LoginRoute } from './pages/login.route';
import { AdminHomeRoute } from './pages/admin-homepage.content';
import { CoordinatorRoute } from './pages/coordinator.route';
import { RoutesRoute } from './pages/routes.route';

export const App: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
        <Switch>
          <Route path='/' exact component = { LoginRoute }/>
          <Route path="/admin" component = { AdminHomeRoute }/>
          <Route path='/coordinator' component = {CoordinatorRoute}/>
          <Route path='/routes' component = {RoutesRoute}/>
        </Switch>
    </BrowserRouter>
  );
}

