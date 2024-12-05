const User = require('../models/user');

exports.createUser = (userData) => User.create(userData);

exports.getAllUsers = () => User.find();

exports.getUserById = (id) => User.findById(id);

exports.updateUser = (id, updateData) => User.findByIdAndUpdate(id, updateData, { new: true });

exports.deleteUser = (id) => User.findByIdAndDelete(id);