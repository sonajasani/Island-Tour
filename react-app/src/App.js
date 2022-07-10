import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ProtectedRoute from "./components/auth/ProtectedRoute";
import { authenticate } from "./store/session";
import { getResorts } from "./store/resorts";
import { getReviews } from "./store/reviews";
import { getBookings } from "./store/bookings";
import Navigation from "./components/Navigation/index";
import UserViewPage from "./components/UserViewPage";
import CreateResort from "./components/Resorts/ResortsForm/CreateResort";
import SingleResort from "./components/Resorts/SingleResort/SingleResort";
import EditResort from "./components/Resorts/ResortsForm/EditResort";
import AllResorts from "./components/Resorts/AllResorts"

import ProfileRoutes from "./components/UserPage/ProfilePage";
import PageNotFound from "./components/PageNotFound";

import loader from "./images/loading.gif";

function App() {
  const dispatch = useDispatch();
  const resorts = Object.values(useSelector(state => state.resort));
  const [filtered, setFiltered] = useState(resorts);
  const [loaded, setLoaded] = useState(false);

  const user = useSelector(state => state.session.user)

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      await dispatch(getResorts());
      await dispatch(getReviews());
      await dispatch(getBookings());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return <img className="loading" src={loader} alt="loader" />;
  }
  return (
    <BrowserRouter>
      <Navigation resorts={resorts} setFiltered={setFiltered} />
      <Switch>

        <Route path="/" exact={true}>
          <UserViewPage />
        </Route>

        <ProtectedRoute path={["/profile", "/profile/@my-resorts", ]} exact={true} >
          <ProfileRoutes />
        </ProtectedRoute>

        <ProtectedRoute path="/resorts/new" exact={true}>
          <CreateResort />
        </ProtectedRoute>

        <ProtectedRoute path="/resorts" exact={true}>
          <AllResorts />
        </ProtectedRoute>

        <ProtectedRoute path="/resorts/:resortId" exact={true}>
          <SingleResort setLoaded={setLoaded} loaded={loaded} resorts={resorts} />
        </ProtectedRoute>

        <ProtectedRoute path="/resorts/:resortId/edit" exact={true}>
          <EditResort />
        </ProtectedRoute>

        <PageNotFound />

      </Switch>
    </BrowserRouter >
  );
}

export default App;
