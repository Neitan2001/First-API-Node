const express = require('express');
const bcrypt = require('bcryptjs');

const User = require('../models/user');

const CreateUser = async (req, res) => {
    const { email } = req.body;

    try {

        if (await User.findOne({ email }))
            return res.status(400).send({ error: 'User already exists' });

        const user = await User.create(req.body);

        user.password = undefined;

        return res.send({ user });
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed' });
    }
}

const Login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email }).select('+password');

        if (!user)
            return res.status(400).send({ error: 'User not found' });

        if (!await bcrypt.compare(password, user.password)) {
            return res.status(400).send({ error: 'Invalid password!' });
        }

        user.password = undefined;

        res.send({ user });
    } catch (err) {
        return res.status(400).send({ error: 'Login failed otário' });
    }
}

module.exports = { CreateUser, Login };