import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/auth';

function Login({ login, isAuthenticated }) {

  const [ formData, setFormData ] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.id]: e.target.value
    })
    // console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password)
  }
  // REDIRECT IF LOGGED IN
  if (isAuthenticated) {
    return <Link to="/dashboard"/>
  }

  return (
    <div>
      <h1 className="large text-primary">Login</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form onSubmit={handleSubmit} className="form" action="create-profile.html">

        <div className="form-group">
          <input
            onChange={handleChange}
            id="email"
            value={email}
            type="email"
            placeholder="Email Address"
            name="email"
            />
          <small className="form-text"
            >This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small
          >
        </div>
        <div className="form-group">
          <input
            onChange={handleChange}
            id="password"
            value={password}
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
          />
        </div>

        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to='/register'>Sign up</Link>
      </p>
    </div>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login)

