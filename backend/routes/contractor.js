const express = require('express');
const router = express.Router();
const Contractor = require('../models/Contractor');
const bcrypt = require('bcryptjs');

router.post('/', async (req, res) => {
  const { firstName, lastName, email, contact, password } = req.body;
  try {
    let user = await Contractor.findOne({ email });
    if (user) {
      return res.status(400).send({ error: 'Email is already registered' });
    }
    user = new Contractor({
      firstName,
      lastName,
      email,
      contact,
      password
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    res.send('User Registered');
  } catch (error) {
    res.status(500).send(error);
  }
});
module.exports = router;
