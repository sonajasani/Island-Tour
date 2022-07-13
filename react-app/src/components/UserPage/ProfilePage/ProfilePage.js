import { useState, useEffect } from 'react';
import BookingCard from '../BookingsPage/BookingCard';
import profilePicture from '../../../images/ProfilePic.png'
import {NavLink, useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import { removeSingleUser} from '../../../store/session';
import {Modal} from '../../../context/Modal'
import './ProfilePage.css'

function ProfilePage({ user }) {

  const [toggleDelete, setToggleDelete] = useState(false);
  const dispatch = useDispatch()
  const history = useHistory();

  const {id, first_name, last_name, photo, username, bio, host } = user

  const deleteUser = (e) => {
    e.preventDefault();

    dispatch(removeSingleUser(id));
    history.push('/')
    setToggleDelete(false)
  }

  return (
    <div className="profile-section">
      { user.id !== 1 &&
      <div className='edit-delete-profile'>
        <NavLink  className='profile-edit' to='/profile/@me-edit'>
          <button className='profile-edit-btn'>Edit Profile Info</button>
        </NavLink>
        <div onClick={() => setToggleDelete(true)} className='profile-delete-btn'>Delete Account
        { toggleDelete && 
        <Modal onClose={() => setToggleDelete(false)}>
        <div className='delete-review-container'> 
            <form className='delete-review-modal' onSubmit={deleteUser}>
                <h2 id='delete-confirmation'>Are you sure you want to delete your account with Island Tour?</h2>
                <button type='submit' className='delete-review-btn'>Delete</button>
            </form>
        </div>
        </Modal>
        }
        </div>
      </div>
     } 
      <div className="profile-page">
        <div className="profile-username">
          <h3>{first_name && last_name ? `${first_name} ${last_name}` : username}</h3>
          <img src={photo ? photo : profilePicture} alt="avatar"/>
          <h3 className='profile-page-bio'>{bio}</h3>
        </div>
      </div>
    </div>
  )
}


export default ProfilePage;
