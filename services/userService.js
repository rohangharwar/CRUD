const userRepository = require('../repositories/userRepository');

exports.createUser = (userData) => userRepository.createUser(userData);

exports.getAllUsers = () => userRepository.getAllUsers();

exports.getUserById = (id) => userRepository.getUserById(id);

exports.updateUser = (id, updateData) => userRepository.updateUser(id, updateData);

exports.deleteUser = (id) => userRepository.deleteUser(id);