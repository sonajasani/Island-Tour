import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaHome } from 'react-icons/fa';
import { BsJournalBookmark } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineLogout } from 'react-icons/ai';
import { VscPreview } from 'react-icons/vsc';
import profilePicture from '../../images/ProfilePic.png'
import LogoutButton from "./LogoutButton";

import './Navigation.css'
import { logout } from '../../store/session';

function ProfileButton() {
  const user = useSelector(state => state.session.user)
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);




  return (
    <>
      <div onClick={openMenu} className='profile-btn'>
        <GiHamburgerMenu />
        <img src={user.profile_pic_url ? user.profile_pic_url : profilePicture} alt="avatar"></img>
      </div>
      {showMenu && (
        <div className='profile-btn-nav' >
          <NavLink className="profile" to="/profile">
            <div className="profile-nav-selection">
              <CgProfile />
              <p className="dropdown-txt">Profile</p>
            </div>
          </NavLink>
          <NavLink className="listings" to="/profile/@my-resorts">
            <div className="profile-nav-selection">
              <FaHome />
              <p className="dropdown-txt">My Resorts</p>
            </div>
          </NavLink>
          <div className="profile-nav-selection" >
            <AiOutlineLogout />
            <LogoutButton />
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileButton;
