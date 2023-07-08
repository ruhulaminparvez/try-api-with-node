const User = require('../models/User');


//Get All Users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get users' });
    }
};

//Create User
exports.createUser = async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        const newUser = new User({
            name,
            email,
            password,
            role
        });

        await newUser.validate();

        const user = await newUser.save();

        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }
};