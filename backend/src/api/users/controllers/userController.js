const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

exports.createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ username, email, password: hashedPassword });
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};

exports.getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user', error });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email } = req.body;

    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.username = username || user.username;
    user.email = email || user.email;
    await user.save();

    res.status(200).json({ message: 'User updated successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error });
  }
};