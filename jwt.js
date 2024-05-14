const jwt = require("jsonwebtoken")

const jwtAuthMiddleware = (req, res, next) => {
    const authorization = req.headers.authorization
    if (!authorization) return res.status(401).json({ error: "Token not found" })

    const token = authorization.split(' ')[1]
    if (!token) return res.status(401).json({ error: "not authorized" })

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET)

        req.user = decode
        next()
    } catch (err) {
        console.error(err);
        res.status(401).json({ error: 'Invalid token' });
    }
}


const generateToken = (userData) => {
    return jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: 300000 })
}

module.exports = { jwtAuthMiddleware, generateToken };