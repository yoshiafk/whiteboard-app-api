const LabelsModel = require("../models/labels");
const jwt = require("jsonwebtoken");
require("dotenv").config()

module.exports = function tokenAuth(req, res, next) {
  try {
      const token = req.headers.authorization
      const verifyToken = jwt.verify(token, process.env.SECRET_KEY)
      res.locals.user = verifyToken
      if(!token) {
          throw new Error("please login first")
      }
      next()

  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "token is not found" });
  }
};
