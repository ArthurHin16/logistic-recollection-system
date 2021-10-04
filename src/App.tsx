import { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LoginRoute } from './pages/login.route';
import { AdminHomeRoute } from './pages/admin-homepage.route';
import { AdminUserRoute } from './pages/admin-user.route'
import { AdminAddUserRoute } from './pages/admin-add-user.route'
import { AdminStoresRoute } from './pages/admin-stores.route';
import { AdminGroceryRoute } from './pages/admin-grocery.route';
import { AdminAddStoreRoute } from './pages/admin-add-store.route';
import { AdminAddGroceryRoute } from './pages/admin-add-grocery.route';
import { CoordinatorRoute } from './pages/coordinator.route';
import { ModalUser } from './components/modals/modal-user.component'
import { ModalStore } from './components/modals/modal-store.component';
import { ModalGrocery } from './components/modals/modal-grocery.component';




export const App: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
        <Switch>
          <Route path='/' exact component = { LoginRoute }/>
          <Route path="/admin" component = { AdminHomeRoute }/>
          <Route path='/admin-user' component = { AdminUserRoute }/>
          <Route path='/admin-newuser' component = { AdminAddUserRoute }/>
          <Route path='/admin-stores' component = { AdminStoresRoute }/>
          <Route path="/admin-newstore" component = { AdminAddStoreRoute }/>
          <Route path='/admin-grocery' component = { AdminGroceryRoute}/>
          <Route path='/admin-newgrocery' component = { AdminAddGroceryRoute }/>
          <Route path='/coordinator' component = { CoordinatorRoute }/>
          <Route path='/modal' component = { ModalUser }/>
          <Route path='/modal2' component = { ModalStore }/>
          <Route path='/modal3' component = { ModalGrocery }/>
        </Switch>
    </BrowserRouter>
  );
}

