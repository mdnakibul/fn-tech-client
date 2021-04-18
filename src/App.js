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
import Review from './Components/Dashboard/CustomerDashboard/Review/Review';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';
import NotFound from './Components/NotFound/NotFound';
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
          <Route exact path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/dashboard/review">
            <Review></Review>
          </Route>
          <Route path="/dashboard/book/:title">
            <BookAService></BookAService>
          </Route> 
          <Route path="/dashboard/book">
            <BookAService></BookAService>
          </Route>
          <Route path="/dashboard/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/dashboard/addService">
            <AddService></AddService>
          </Route>
          <Route path="/dashboard/allOrders">
            <AllOrders></AllOrders>
          </Route>
          <Route path="/dashboard/manageServices">
            <ManageServices></ManageServices>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
