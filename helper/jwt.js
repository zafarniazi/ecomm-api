require("dotenv").config();
const jwt = require('express-jwt')
function authjwt() {
    const secret = process.env.secret;
    return jwt({ secret, algorithms: ['HS256'] })
}

module.exports = authjwt;