const process = require('process')
const dotenv = require('dotenv')
dotenv.config()

const config = {
    mongodbURL : process.env["DATABASE_URL"] || "not yet configured",

}

module.exports = config;