import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../../store/session';
import DemoLogin from './demo'

/************************************************************************************/

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const [hasSubmitted, setHasSubmitted] = useState(false);
	const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
  const dispatch = useDispatch();


  useEffect(() => {
		const errors = [];
		if (username.length === 0) errors.push("Must provide a value for the username.");
		if (email.length === 0) errors.push("Must provide a value for the email.");
		if (!emailRegex.test((email))) errors.push("Must provide a valid email.");
		if (password.length === 0)
			errors.push("Must provide a value for the password.");
		if (repeatPassword.length === 0) errors.push("Must repeat the password.");
		if (repeatPassword !== password) errors.push("Passwords do not match.");
		setErrors(errors);
	}, [email, password, repeatPassword]);


	const onSignUp = async (e) => {
		e.preventDefault();
		setHasSubmitted(true);
		if (errors.length <= 0) {
			const data = await dispatch(signUp(username, email, password));
			console.log(data);
			if (data) {
				setErrors(data);
			}
		}
	};

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onSignUp}>
      <div>
        { hasSubmitted && errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <label>User Name</label>
        <input
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div>
        <label>Email</label>
        <input
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <label>Repeat Password</label>
        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <button type='submit'>Sign Up</button>
      <DemoLogin />
    </form>
  );
};


/******************************************************************************/

export default SignUpForm;
