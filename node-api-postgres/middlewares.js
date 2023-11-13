const jwt = require("jsonwebtoken");
const createError = require("http-errors");
const {getToken} = require('./queries.js');

verifyToken = (req, res, next) => {
    let token = req.headers.token;

    if (!token) {
        return next(createError(403, "Токен не предоставлен"));
    }

    const tokens = getToken(req, res, next)

    if (tokens.length > 0) {
        jwt.verify(
            token,
            config.secret,
            (err, decoded) => {
                if (err) {
                    return next(createError(401, "Пользователь не авторизован!"));
                }
                next();
            });
    }
}