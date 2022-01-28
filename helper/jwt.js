require("dotenv").config();
const api = process.env.API_URL
const jwt = require('express-jwt')
function authjwt() {

    const secret = process.env.secret;
    return jwt({ secret, algorithms: ['HS256'], isRevoked: isRevoked }).unless({
        path: [
            { url: /\/api\/v1\/products(.*)/, methods: ['GET', 'OPTIONS'] },
            { url: /\/api\/v1\/categories(.*)/, methods: ['GET', 'OPTIONS'] },
            `${api}/users/login`,
            `${api}/users/register`,
        ]
    })
    async function isRevoked(req, payload, done) {
        if (!payload.isAdmin) {
            done(null, true)
        }

        done();
    }
}

module.exports = authjwt;