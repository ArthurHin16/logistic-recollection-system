import { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AdminHomeRoute } from './pages/admin-homepage.route';
import { AdminUserRoute } from './pages/admin-user.route'
import { AdminAddUserRoute } from './pages/admin-add-user.route'
import { AdminStoresRoute } from './pages/admin-stores.route';
import { AdminGroceryRoute } from './pages/admin-grocery.route';
import { AdminAddStoreRoute } from './pages/admin-add-store.route';
import { AdminAddGroceryRoute } from './pages/admin-add-grocery.route';
import { CoordinatorRoute } from './pages/coordinator.route';
import { AdminUserEditComponent } from './components/admin-userEdit/admin-user-edit.component';
import { AdminStoreEditComponent } from './components/admin-storeEdit/admin-store-edit.component';
import { AdminGroceryEditComponent } from './components/admin-groceryEdit/admin-grocery-edit.component';
import { LoginComponent1 } from './components/login/login1.component';

export const App: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
        <Switch>
          <Route path='/' exact component = { LoginComponent1 }/>
          <Route path="/admin" component = { AdminHomeRoute }/>
          <Route path='/admin-user' component = { AdminUserRoute }/>
          <Route path='/admin-newuser' component = { AdminAddUserRoute }/>
          <Route path='/admin-stores' component = { AdminStoresRoute }/>
          <Route path="/admin-newstore" component = { AdminAddStoreRoute }/>
          <Route path='/admin-grocery' component = { AdminGroceryRoute}/>
          <Route path='/admin-newgrocery' component = { AdminAddGroceryRoute }/>
          <Route path='/coordinator' component = { CoordinatorRoute }/>
          <Route path='/user/:id/edit' component = { AdminUserEditComponent }/>
          <Route path='/store/:id/edit' component = { AdminStoreEditComponent }/>
          <Route path='/grocery/:id/edit' component = { AdminGroceryEditComponent }/>
        </Switch>
    </BrowserRouter>
  );
}

