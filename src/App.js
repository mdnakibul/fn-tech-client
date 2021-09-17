import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddService from './Components/Dashboard/AdminDashboard/AddService/AddService';
import AllOrders from './Components/Dashboard/AdminDashboard/AllOrders/AllOrder';
import MakeAdmin from './Components/Dashboard/AdminDashboard/MakeAdmin/MakeAdmin';
import ManageServices from './Components/Dashboard/AdminDashboard/ManageServices/ManageServices';
import BookAService from './Components/Dashboard/CustomerDashboard/BookAService/BookAService';
import OrderList from './Components/Dashboard/CustomerDashboard/OrderList/OrderList';
import Review from './Components/Dashboard/CustomerDashboard/Review/Review';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import NotFound from './Components/NotFound/NotFound';
import './App.css'
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute exact path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/review">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/book/:id">
            <BookAService></BookAService>
          </PrivateRoute> 
          <PrivateRoute path="/dashboard/book">
            <BookAService></BookAService>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/order-list">
            <OrderList></OrderList>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/allOrders">
            <AllOrders></AllOrders>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/manageServices">
            <ManageServices></ManageServices>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
