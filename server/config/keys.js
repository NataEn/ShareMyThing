require("dotenv").config();

module.exports = {
  mongoURI: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@sharehub.btbi4.mongodb.net/Sharehub?retryWrites=true&w=majority`,
  jwtSecret: process.env.JWT_SECRET,
};
