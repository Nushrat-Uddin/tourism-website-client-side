
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import AddDestination from './components/AddDestination/AddDestination';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MyOrder from './components/MyOrder/MyOrder';
import ManageOrder from './components/ManageOrder/ManageOrder';

import OrderDetails from './components/OrderDetails/OrderDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './Context/AuthProvider';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
       <Switch>
         <Route exact path='/'>
          <Home></Home>
         </Route>
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
         <PrivateRoute path='/myorder'>
           <MyOrder></MyOrder>
         </PrivateRoute>

         <PrivateRoute path='/manageallorder'>
           <ManageOrder></ManageOrder>
         </PrivateRoute>
         <Route path='/adddestination'>
           <AddDestination></AddDestination>
         </Route>
         <PrivateRoute path='/orderdetails/:destinationId'>
          <OrderDetails></OrderDetails>
         </PrivateRoute>
         <Route path='*'>
           <NotFound></NotFound>
         </Route>
         
       </Switch>
      </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
