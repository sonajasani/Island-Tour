import { Switch, Route } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from "react";

import ProfileListings from "./ProfileListings";
import ProfilePage from "./ProfilePage";


function ProfileRoutes() {
  const user = useSelector(state => state.session.user);
  const bookings = Object.values(useSelector(state => state.booking));
  const resorts = Object.values(useSelector(state => state.resort));
  const myBookings = bookings.filter(booking => user.bookings.includes(booking.id))
  const myResorts = resorts.filter( resort => user.resorts.includes(resort.id))


  return (
    <>
      <Switch>
        <Route path='/profile' exact ={true}>
          <ProfilePage user={user} myBookings={myBookings}/>
        </Route>
        <Route path='/profile/@my-resorts' >
          <ProfileListings user={user} myResorts={myResorts} />
        </Route>
      </Switch>

    </>
  )
}

export default ProfileRoutes;
