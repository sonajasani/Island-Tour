import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Navigation.css'


import LoginModal from '../auth/LoginModal';
import SignUpModal from '../auth/SignupModal';
import ProfileButton from './ProfileButton';


const Navigation = ({resorts, setFiltered }) => {
  let location = useLocation();
  const user = useSelector(state => state.session.user)

  let sessionLinks;
  if (user) {
    sessionLinks = (
      <>
        <div className='nav-bar-right'>
          <ProfileButton />
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
        <NavLink to='/' exact={true} activeClassName='active' className='nav-logo'>
          <img src={logo} alt="logo" />
          <span>Island Tour</span>
        </NavLink>
      </div>
      <NavLink to='/@about-developer' exact={true}>
        <h3 className='nav-about-div'>About</h3>
      </NavLink>
      {sessionLinks}
    </div>
  );
}

export default Navigation;
