import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import PropTypes from 'prop-types'


function Register({ setAlert }) {

  const [ formData, setFormData ] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.id]: e.target.value
    })
    // console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords Do Not Match', 'danger')
    } else {
      console.log('SUCCESS')
    }
  }

  return (
    <div>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form onSubmit={handleSubmit} className="form" action="create-profile.html">
        <div className="form-group">
          <input
            onChange={handleChange}
            id="name"
            value={name}
            type="text"
            placeholder="Name"
            name="name"
            required />
        </div>
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
        <div className="form-group">
          <input
            onChange={handleChange}
            id="password2"
            value={password2}
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </div>
  )
}

Register.propTypes = {
  setAlert: PropTypes.func.isRequired
}

export default connect(null, { setAlert })(Register)