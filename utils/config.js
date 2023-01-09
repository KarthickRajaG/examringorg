require('dotenv').config()

module.exports = {
    NODE_ENV:process.env.NODE_ENV,
    MONGO_DATABASE_DEV:process.env.MONGO_DATABASE_DEV ,
    PORT:process.env.PORT,
    SECRET_KEY:process.env.SECRET_KEY
}