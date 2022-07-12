import BookingCard from '../BookingsPage/BookingCard';
import profilePicture from '../../../images/ProfilePic.png'
import {NavLink} from 'react-router-dom'
import './ProfilePage.css'

function ProfilePage({ user }) {
  const { first_name, last_name, photo, username, bio, host } = user

  return (
    <div className="profile-section">
      {/* { user.id !== 1 && */}
      <div className='edit-delete-profile'>
        {/* <NavLink  className='profile-edit' to='/profile/@me-edit'>
          <button className='profile-edit-btn'>Edit Profile Info</button>
        </NavLink>
        <p className='profile-delete-btn'>Delete</p> */}
      </div>
     {/* }  */}
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
