const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, default: "", required: true },
    email: { type: String, default: "", defaultRequired: true },
    password: { type: String, default: "", required: true },
    role: { type: String, default: "user" },
});

const User = mongoose.model('User', userSchema);

module.exports = User;