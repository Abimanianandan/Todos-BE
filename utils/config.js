require("dotenv").config();

const MongoDB_URL = process.env.MONGODB_URL;
const Port = process.env.PORT

module.exports = {MongoDB_URL,Port}