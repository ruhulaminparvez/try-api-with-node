const User = require('../models/User');

//Get All Users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ users });
    } catch (err) {
        res.status(400).json({ err });
    }
};

//Create User
exports.createUser = async (req, res) => {
    try {
        const newUser = {
            name: "Ruhul Amin",
            email: "ruhulamin@gmail.com",
            password: "123456",
            role: "admin"
        }

        const user = await User.create(newUser);
        res.status(201).json({ user });
    } catch (err) {
        res.status(400).json({ err });
    }
}