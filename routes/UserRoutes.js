const express = require('express')
const router = express.Router();
const User = require("../models/user")
const { jwtAuthMiddleware, generateToken } = require("../jwt")

router.post('/signup', async (req, res) => {
    try {
        const data = req.body
        const newUser = new User(data);
        const response = await newUser.save();
        console.log('data saved');
        const payload = {
            id: response.id
        }
        console.log(JSON.stringify(payload));
        const token = generateToken(payload);
        console.log("Token is : ", token)
        res.status(200).json({ response: response, token: token })

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" })

    }
})

router.post('/login', async (req, res) => {
    try {
        if (!req.body.aadharCardNumber || !req.body.password) {
            return res.status(400).json({ error: "please enter username and password" })
        }

        console.log(req.body.aadharCardNumber,req.body.password)

        const { aadharCardNumber, password } = req.body
        const user = await User.findOne({ aadharCardNumber: aadharCardNumber })
        console.log(user)
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ error: 'Invalid username and Password' })
        }
        const payload = {
            id: user.id
        }

        console.log(JSON.stringify(payload));
        const token = generateToken(payload);
        console.log("Token is : ", token)
        res.status(200).json({ token: token , message:" Loggged to Voting system"})

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" })
    }

})

router.get('/profile', jwtAuthMiddleware, async (req, res) => {
    try {
        const userData = req.user
        const userId = userData.id
        const user = await User.findById(userId)
        res.status(200).json({ user })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" })
    }
})

router.put('/profile/password', jwtAuthMiddleware, async (req, res) => {
    try {
        const userId = req.user.id
        const { currentPassword, newPassword } = req.body
        const user = await User.findById(userId)
        if (!user || !(await user.comparePassword(currentPassword))) {
            return res.status(401).json({ error: 'Invalid username and Password' })
        }
        user.password = newPassword
        await user.save()
        console.log("password updated");
        res.status(200).json({ message: "password updated " })
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" })
    }
})

module.exports = router;