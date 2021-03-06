const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const { check, validationResult} = require('express-validator')
const jwt = require('jsonwebtoken');
const config = require('config');

const User = require('../models/User');

// @route  GET api/users
// @desc   Register User
// @access Public
router.post('/',
[
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
],
  async (req, res) => {
  // Express-Validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ errors: [ { msg: 'User already exists' } ] })
    }
    // Create gravatar variable
    const avatar = gravatar.url(email, {
      s: '200',
      r: 'pg',
      d: 'mm'
    });

    user = new User({ name, email, avatar, password});
    // Implement Bcrypt
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id
      }
    }
    // JSON Web Token
    jwt.sign(
        payload,
        config.get('jwtToken'),
        {expiresIn: 360000},
        (err, token) => {
          if (err) throw err;
          res.json({ token })
        }
    )

  } catch (err) {
     console.log(err)
     res.status(500).json('Server Error')
  }
  console.log(req.body)
})


module.exports = router;