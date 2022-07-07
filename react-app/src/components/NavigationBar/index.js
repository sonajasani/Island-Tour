// frontend/src/components/Navigation/index.js
import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import ProfileButton from "./ProfileButton";
import LoginModal from "../auth/LoginModal";
import SignupModal from "../auth/SignupModal";
import "./Navigation.css";


/******************************************************************************************/


const NavigationBar = () => {

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
          <SignupModal />
        </div>
      )
    }
  
    return (
      <div className='nav-bar'>
        <div className='nav-bar-left'>
          <NavLink to='/' exact={true} activeClassName='active'>
            <p>Island Tour</p>
          </NavLink>
        </div>
        {sessionLinks}
      </div>
    );
  }

/*********************************************************************************************/


export default NavigationBar;
