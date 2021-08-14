import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { auth } from './services/firebase';
import { userStateChanged } from './actions/authAction';

import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Products from './pages/Products';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import NotFound from './pages/NotFound';
import CreateProduct from './pages/CreateProduct';
import ShowProduct from './pages/ShowProduct';
import UpdateProduct from './pages/UpdateProduct';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      dispatch(userStateChanged(user));
    });
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/products" component={Products} />
        <PrivateRoute exact path="/products/create" component={CreateProduct} />
        <PrivateRoute exact path="/products/update/:id" component={UpdateProduct} />
        <PrivateRoute exact path="/products/:id" component={ShowProduct} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
