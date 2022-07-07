import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../../store/session';
import DemoLogin from '../demo'
import './LoginForm.css'


/*****************************************************************************************/

const LoginForm = ({ setShowLoginModal }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();


  const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;


  useEffect(() => {
		const errors = [];
		if (email.length === 0) errors.push("Must provide a value for the email.");
		if (!emailRegex.test(email)) errors.push("Must provide a valid email.");
		if (password.length === 0)
			errors.push("Must provide a value for the password.");
		setErrors(errors);
	}, [email, password]);

  
  const onLogin = async (e) => {
		e.preventDefault();
		setHasSubmitted(true);

		if (errors.length <= 0) {
			let data = await dispatch(login( email, password ));
			if (data) {
				setErrors(data)
			}
		}
	};

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onLogin} className="login-form-class">
      <div>
        {hasSubmitted && errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <input
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div>
        <input
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
        />
      </div>
      <button type='submit'>Login</button>
      <DemoLogin />
    </form>
  );
};


/******************************************************************************/

export default LoginForm;
