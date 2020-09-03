/**
 * USER
 */
const util = require('util')
const express = require('express')
const User = require('../models/User')
const auth = require('../middleware/auth')
const router = express.Router()
util.log('-> Init Router/user')

router.get('/users/me', auth, async(req, res) => {
    util.log('REQUEST: GET /users/me');
    // View logged in user profile
    res.send(req.user)
})

router.post('/users', async (req, res) => {
    // Create a new user
    util.log('REQUEST: POST /users');
    try {
        const user = new User(req.body)
        console.log('req.body: ', req.body);
        await user.save()
        const token = await user.generateAuthToken()
        res.cookie('auth',token);
        res.status(201).send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/users/login', async(req, res) => {
    util.log('REQUEST: POST /users/login');
    //Login a registered user
    try {
        const { email, password } = req.body
        const user = await User.findByCredentials(email, password)
        if (!user) {
            return res.status(401).send({error: 'Login failed! Check authentication credentials'})
        }
        const token = await user.generateAuthToken()
        res.cookie('auth',token);
        res.send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/users/me/logout', auth, async (req, res) => {
    util.log('REQUEST: POST /users/me/logout');
    // Log user out of the application
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token != req.token
        })
        const logoutUser = await req.user.save()
        res.send(logoutUser);
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post('/users/me/logoutall', auth, async(req, res) => {
    util.log('REQUEST: POST /users/me/logoutAll');
    // Log user out of all devices
    try {
        req.user.tokens.splice(0, req.user.tokens.length)
        const logoutUsers = await req.user.save()
        res.send(logoutUsers)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router