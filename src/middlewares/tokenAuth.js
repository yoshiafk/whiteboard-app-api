const LabelsModel = require("../models/labels");
const jwt = require("jsonwebtoken");
require("dotenv").config()

module.exports = function tokenAuth(req, res, next) {
  try {
      const token = req.headers.Authorization
      const verifyToken = jwt.verify(token, "753aa42def6fb57a933ef0c4e53dd8a087dfbf5bad7e91f8f22dd4bb58dd3b5c7f8347f00ae8e7fbe8d4763c8b6b3f7eef9d2ebea21a107e6158718ea35a2eca")
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
