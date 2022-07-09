import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../images/logo.png';


import LoginModal from '../auth/LoginModal';
import SignUpModal from '../auth/SignupModal';
import ProfileButton from './ProfileButton';
import './Navigation.css'


const NavigationBar = ({spots, setFiltered }) => {
  let location = useLocation();
  const user = useSelector(state => state.session.user)

  let sessionLinks;
  if (user) {
    sessionLinks = (
      <>
        <div className='nav-bar-right'>
          <ProfileButton />
          <NavLink to='/resorts'>
            <button>View All Resorts</button>
          </NavLink>
        </div>
      </>
    )
  }
  else {
    sessionLinks = (
      <div className='nav-bar-right'>
        <LoginModal />
        <SignUpModal />
      </div>
    )
  }

  return (
    <div className='nav-bar'>
      <div className='nav-bar-left'>
        <NavLink to='/' exact={true} activeClassName='active'>
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      {sessionLinks}
    </div>
  );
}

export default NavigationBar;
