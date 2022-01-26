const User = require('../models/user')


const register = async () => {
    const user = new User(req.body)
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).json(user)
    } catch (e) {
        res.status(400).json(e)
    }
}


const login = async (req, res) => {
    try {
        const user = await User.findUserByCred(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.cookie('JWT_token', token, {
            httpOnly: true
        });
        res.json(user)
    } catch (e) {
        res.status(400).json()
    }

}

const logout = async (req, res) => {
    try {
        res.cookie('JWT_token', {
            maxAge: 0,
            httpOnly: true
        })
        res.json('Success')
    } catch (e) {
        res.status(500).json(e)
    }
}



module.exports = {
    register,
    login,
    logout
}