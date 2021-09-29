import { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LoginRoute } from './pages/login.route';
import { AdminHomeRoute } from './pages/admin-homepage.content';

export const App: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
        <Switch>
          <Route path='/' exact component = { LoginRoute }/>
          <Route path="/admin" component = { AdminHomeRoute }/>
        </Switch>
    </BrowserRouter>
  );
}

