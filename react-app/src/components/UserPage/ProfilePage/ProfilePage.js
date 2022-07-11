import BookingCard from '../BookingsPage/BookingCard';
import profilePicture from '../../../images/ProfilePic.png'
import './ProfilePage.css'

function ProfilePage({ user }) {
  const { first_name, last_name, photo, username, bio, host } = user

  return (
    <div className="profile-section">
      <div className="profile-page">
        <div className="about-me-container">
          <img src={photo ? photo : profilePicture} alt="avatar"/>
          <div className="bio">
            <h3>{first_name && last_name ? `${first_name} ${last_name}` : username}</h3>
          </div>
        </div>
      </div>

    </div>

  )
}

export default ProfilePage;
