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
import { RoutesRoute } from './pages/routes.route';
import { ModalUser } from './components/modals/modal-user.component'
import { ModalStore } from './components/modals/modal-store.component';
import { ModalGrocery } from './components/modals/modal-grocery.component';
import { DeliveryRequestRoute } from './pages/delivery-request.route';
import { AssignWarehouseRoute } from './pages/assign-warehouse.route';
import { CoordinatorMapRoute } from './pages/coordinator-map.route';
import { CoordinatorLoginRoute } from './pages/coordinator-login.route';
import { CreateDonationRoute } from './pages/create-donation.route';



import { AdminUserEditComponent } from './components/admin-userEdit/admin-user-edit.component';
import { AdminStoreEditComponent } from './components/admin-storeEdit/admin-store-edit.component';
import { AdminGroceryEditComponent } from './components/admin-groceryEdit/admin-grocery-edit.component';
import { LoginComponent1 } from './components/login/login1.component';
import { EditRouteRoute } from './pages/edit-route.route';

export const App: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
        <Switch>
          <Route path='/' exact component = { LoginComponent1 }/>
          <Route path="/admin" component = { AdminHomeRoute }/>
          <Route path='/coordinator' component = {CoordinatorRoute}/>
          <Route path='/routes' component = {RoutesRoute}/>
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
          <Route path='/delivery-requests' component ={DeliveryRequestRoute} />
          <Route path='/assign-warehouse/:id' component = {AssignWarehouseRoute} />
          <Route path='/coordinator-map/:id' component ={CoordinatorMapRoute} /> 
          <Route path ='/coordinator-login' component={CoordinatorLoginRoute} />
          <Route path= '/create-donation' component = {CreateDonationRoute} />
          <Route path='/user/:id/edit' component = { AdminUserEditComponent }/>
          <Route path='/store/:id/edit' component = { AdminStoreEditComponent }/>
          <Route path='/grocery/:id/edit' component = { AdminGroceryEditComponent }/>
          <Route path='/edit-route/:id' component ={EditRouteRoute} />
        </Switch>
    </BrowserRouter>
  );
}

