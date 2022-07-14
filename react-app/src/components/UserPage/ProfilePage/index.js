import { Switch, Route } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from "react";
import {getBookings} from "../../../store/bookings"

import ProfileListings from "./ProfileListings";
import ProfilePage from "./ProfilePage";
import BookingCard from '../BookingsPage/BookingCard';


function ProfileRoutes() {
  const user = useSelector(state => state.session.user );

  const resorts = Object.values(useSelector(state => state.resort));
  const myResorts = resorts?.filter( resort => user.resorts?.includes(resort.id))



  const bookings = Object.values(useSelector(state => state.booking));
  console.log(bookings, "..................bookings in booking................")


  const myBookings = bookings?.filter(booking => booking.user_id == user.id)
  // const myBookings = bookings?.filter(booking => user.bookings?.includes(booking.id))
  console.log(myBookings, "..................mybookings in booking................")



  


  return (
    <>
      <Switch>
        <Route path='/profile' exact ={true}>
          <ProfilePage user={user}/>
        </Route>
        <Route path='/profile/@my-resorts' >
          <ProfileListings user={user} myResorts={myResorts} />
        </Route>
        <Route path='/profile/@my-reservations' >
          { myBookings?.length != 0 ?
            <div className="my-bookings-container">
              {myBookings?.map( booking => (
                <BookingCard booking={booking} key={booking?.id}/>
            ))}
            </div>
          : 
            <h1 className='booking-div'>Currently you have zero bookings...!!</h1>
          }
        </Route>
      </Switch>

    </>
  )
}

export default ProfileRoutes;
