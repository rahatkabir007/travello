import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './components/context/AuthProvider';
import Home from './components/Pages/Home/Home';
import PlaceOrder from './components/Pages/Home/HomeServices/PlaceOrder/PlaceOrder';
import NotFound from './components/Pages/notFound/NotFound';
import Footer from './components/Pages/Shared/Footer/Footer';
import PrivateRoute from './components/Pages/SignIn/PrivateRoute/PrivateRoute';

import SignIn from './components/Pages/SignIn/SignIn';

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
            <PrivateRoute path="/placeOrder/:serviceKey">
              <PlaceOrder></PlaceOrder>
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
