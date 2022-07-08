import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getResorts } from "./store/resorts";
import NavigationBar from './components/NavigationBar/index';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import AllResorts from './components/AllResortsPage/AllResorts';
import SingleResort from './components/AllResortsPage/SingleResort';
import CreateResort from './components/AllResortsPage/CreateResort';

function App() {
  const [loaded, setLoaded] = useState(false);;
  const dispatch = useDispatch();
 

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute path='/resorts' exact={true} >
          <AllResorts />
        </ProtectedRoute>
        <ProtectedRoute path='/resorts/:resortId' exact={true} >
          <SingleResort />
        </ProtectedRoute>
        <ProtectedRoute path="/resorts/create/new" exact={true}>
          <CreateResort />
        </ProtectedRoute>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <NavigationBar loaded={loaded} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
