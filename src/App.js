import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './Components/PrivateRoute';
import CustomerPlace from './Components/Customer-Place/CustomerPlace';
import CustomerServiceList from './Components/Customer-Place/CustomerServiceList';
import CustomerReview from './Components/Customer-Place/CustomerReview';
import AdminService from './Components/AdminDashBoard/AdminService';
import AddService from './Components/AdminDashBoard/AddService';
import MakeAdminpage from './Components/AdminDashBoard/MakeAdminpage';


export const userContext = createContext()


function App() {
  const [loggedInUser,setLoggedinUser] = useState({})
  return (
   
    <userContext.Provider value={[loggedInUser,setLoggedinUser]}>
       <Router>
         <Switch>
             
         <Route path="/login">
          <Login></Login>
       </Route>

     {/* It also works 
      <PrivateRoute path="/customer/:id">
          <CustomerPlace></CustomerPlace>

        </PrivateRoute>
  for multi-line comments. */}
      
      <PrivateRoute path="/customer/:id">
          <CustomerPlace></CustomerPlace>

        </PrivateRoute>
               
        <Route path="/servicelist">
             <CustomerServiceList></CustomerServiceList>

           </Route>
           <Route path="/order">
             <CustomerPlace></CustomerPlace>

           </Route>
           <Route path="/review">
             <CustomerReview></CustomerReview>

           </Route>

           <Route path="/adminService">
             <AdminService></AdminService>

           </Route>
           <Route path="/addservice">
             <AddService></AddService>

           </Route>
           <Route path="/makeadmin">
             <MakeAdminpage></MakeAdminpage>

           </Route>

           <Route path="/home">
             <Home></Home>

           </Route>
        

           <Route path="/">
             <Home></Home>

           </Route>
         </Switch>
       </Router>


       </userContext.Provider>
   
  );
}

export default App;
