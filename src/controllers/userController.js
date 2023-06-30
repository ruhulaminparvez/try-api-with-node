const User = require('../models/User');

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