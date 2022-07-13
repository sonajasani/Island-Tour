import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom'
import { editSingleUser, removeSingleUser, logout } from '../../../store/session';
import './EditProfile.css'


function EditProfile() {

    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector(state => state.session.user);
    const userId = user?.id;


    const [username, setUserName] = useState(user?.username);
    const [email, setEmail] = useState(user?.email);
    const [bio, setBio] = useState(user?.bio);
    const [photo, setPhoto] = useState(user?.photo);
    const [errors, setErrors] = useState([]);
    const [first_name, setFName] = useState(user?.first_name);
    const [last_name, setLName] = useState(user?.last_name);
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

    useEffect(() => {
        const err = []
        if (username.length <= 3) err.push('Username must be at least 4 characters');
        if (username.length >= 30) err.push('Username must not be greater than 30 characters');
        if (first_name.length > 20) err.push('First Name must not be greater than 20 characters');
        if (last_name.length > 20) err.push('Last Name must not be greater than 20 characters');
        if (email.length <= 0 || (!emailRegex.test((email)))) err.push('You must enter a valid email');
        if (bio.length > 1000) err.push('Bio must not be longer than 100 characters')

        setErrors(err);
    }, [username, email, bio, first_name, last_name])


    const submitForm = (e) => {
        e.preventDefault();
        const err = [];
        const formData = new FormData();
        formData.append('username', username);
        formData.append('first_name', first_name);
        formData.append('last_name', last_name);
        formData.append('email', email);
        formData.append('bio', bio);
        formData.append('photo', photo);
        console.log(formData, '........................eup............')
        dispatch(editSingleUser(userId, formData));
        setTimeout(() => {
            err.push('Username or email is already in use. Please try a different one.')
            setErrors(err)
        }, 1000)
    }

    const onCancel = () => {
		history.push(`/profile`)
	}


    return (
        <>
        <div className='edit-user-container'>
            <h1 className='warning-edit-message'>WARNING: Submitting changes to your user information will require you to validate your user info at the login page...!!</h1>
            <div className='edit-user-form'>
                <ul className='edit-user-errors'>
                    {
                        errors.length > 0 && errors.map((err, i) => (
                            <li key={i}>{err}</li>
                        ))
                    }
                </ul>
                <form className='edit-form-user' onSubmit={submitForm}>

                    <label htmlFor='username'>Username</label>
                    <input
                    name='username'
                    type='text'
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    >
                    </input>

                    <label htmlFor='email'>Email</label>
                    <input
                    name='email'
                    type='text'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    >
                    </input>

                    <label htmlFor='first_name'>First Name</label>
                    <input
                    name='first_name'
                    type='text'
                    value={first_name}
                    onChange={(e) => setFName(e.target.value)}
                    >
                    </input>
                    
                    <label htmlFor='last_name'>Last Name</label>
                    <input
                    name='last_name'
                    type='text'
                    value={last_name}
                    onChange={(e) => setLName(e.target.value)}
                    >
                    </input>


                    <label htmlFor='for'>Bio</label>
                    <input
                    disabled={user?.username == 'Demo'}
                    type='text'
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    >
                    </input>

                    <label htmlFor='photo'>Photo</label>
                    <input 
                    className='filetype-btn'
                    placeholder='Banner Url *Optional'
                    draggable="false"
                    type="file"
                    accept="image/png, image/jpeg, image/png, image/gif"
                    name='banner_url'
                    onChange={(e) => setPhoto(e.target.files[0])}
                    >
                    </input>
                    <button id='edit-user-btn' type='submit' disabled={errors.length}>Submit Changes</button>
                    <button id='edit-cancel-btn' onClick={onCancel} >Cancel</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default EditProfile;