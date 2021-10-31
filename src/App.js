import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './components/context/AuthProvider';
import AddService from './components/Pages/AddService/AddService';
import Home from './components/Pages/Home/Home';
import AboutUs from './components/Pages/AboutUs/AboutUs';
import PlaceOrder from './components/Pages/Home/HomeServices/PlaceOrder/PlaceOrder';
import ManageOrder from './components/Pages/ManageOrder/ManageOrder';
import MyOrders from './components/Pages/MyOrders/MyOrders';
import NotFound from './components/Pages/notFound/NotFound';
import Footer from './components/Pages/Shared/Footer/Footer';
import PrivateRoute from './components/Pages/SignIn/PrivateRoute/PrivateRoute';
import SignIn from './components/Pages/SignIn/SignIn';
import MainServices from './components/Pages/MainServices/MainServices';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/aboutus'>
              <AboutUs></AboutUs>
            </Route>
            <Route path='/mainServices'>
              <MainServices></MainServices>
            </Route>
            <PrivateRoute path="/services/:serviceId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/addService">
             <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/myOrders">
             <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/manageOrders">
             <ManageOrder></ManageOrder>
            </PrivateRoute>
            <Route path='/signin'>
              <SignIn></SignIn>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
