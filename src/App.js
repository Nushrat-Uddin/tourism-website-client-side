
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import AddDestination from './components/AddDestination/AddDestination';
import Booking from './components/Booking/Booking';

import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import OrderDetails from './components/OrderDetails/OrderDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Service from './components/Service/Service';


import Tours from './components/Tours/Tours';
import AuthProvider from './Context/AuthProvider';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
       <Switch>
         <Route path='/home'>
          <Home></Home>
         </Route>
         <Route path='/about'>
          <About></About>
         </Route>
         <Route path='/contact'>
          <Contact></Contact>
         </Route>
         <Route path='/login'>
          <Login></Login>
         </Route>
         <Route exact path='/'>
          <Home></Home>
         </Route>
         <Route path='/addDestination'>
           <AddDestination></AddDestination>
         </Route>
         <PrivateRoute path='/orderdetails/:destination_id'>
          <OrderDetails></OrderDetails>
         </PrivateRoute>
         
       </Switch>
      </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
