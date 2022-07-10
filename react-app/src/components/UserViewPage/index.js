import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import SplashPage from '../SplashPage';

function UserViewPage() {
  const sessionUser = useSelector(state => state.session.user)

  return (
    <>
      {sessionUser ? 
          <NavLink to='/resorts'>
            <button>View All Resorts</button>
          </NavLink>
        :
          <SplashPage />
      } 
    </>
  )
}

export default UserViewPage;
