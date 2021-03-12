const commentModel = require("../models/comment")();
const control = require("express").Router();
// const middlewareAuth = require("../middlewares/tokenAuth");
const middlewareValidation = require("../middlewares/validationComment")

module.exports = function labelController() {
  control.post("/comment", middlewareValidation.createComment ,async (req, res) => {
    try {
      const data = await commentModel.create(req.body);
      res.json({ message: "success create new comment", comment: data});
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "error when create comment" });
    }
  });

  // Get all comment
  control.get("/comment",async (req, res) => {
    try {
      const data = await commentModel.find();
      res.json({ message: "succes get data comment", data: data });
    } catch (error) {
      res.status(500).json({ message: "error when get comment" });
    }
  });

  control.put("/comment", middlewareValidation.updateComment ,async (req, res) => {
    try {
      const id = req.body["id"];
      const description = req.body["description"];
      await commentModel.updateOne({ _id: id }, { description: description });
      res.json({ message: "success update comment", comment: description });
    } catch (error) {
      res.status(500).json({ message: "error when update comment" });
    }
  });

  control.delete("/comment", async (req, res) => {
    try {
      const id = req.query["id"];
      await commentModel.deleteOne({ _id: id });
      res.json({ message: "sucess delete comment ", commentId: id });
    } catch (error) {
      res.status(500).json({ message: "error when delete comment" });
    }
  });

  return control;
};
