var jwt = require('jsonwebtoken');

const authToken = (req, res, next) => {
    // const authHeader = req.header('Authorization');
    let token = req.body.token || req.query.token || req.header("Authorization");
    token = token.split(' ')[1]
    console.log({ token });
    if (!token) {
        res.sendStatus(401).json({ success: false, message: 'khong tim thay tonken' });
    }
    try {

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        next()
    } catch (err) {
        return res.status(401).send("phiên đăng nhập đã hết hạn")
    }

}
module.exports = authToken;