const labelsModel = require("../models/labels")();
const control = require("express").Router();
const middlewareAuth = require("../middlewares/tokenAuth");

module.exports = function labelController() {
  control.post("/label", middlewareAuth, async (req, res) => {
    try {
      await labelsModel.create(req.body);
      res.json({ message: "success create new label" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "error when create label" });
    }
  });

  control.get("/label", middlewareAuth ,async (req, res) => {
    try {
      const data = await labelsModel.find();
      res.json({ message: "succes get data label", data: data, user: res.locals.user });
    } catch (error) {
      res.status(500).json({ message: "error when get label" });
    }
  });

  control.put("/label", middlewareAuth, async (req, res) => {
    try {
      const id = req.body["id"];
      const labelName = req.body["labelName"];
      await labelsModel.updateOne({ _id: id }, { labelName: labelName });
      res.json({ message: "success update label", label: labelName });
    } catch (error) {
      res.status(500).json({ message: "error when update label" });
    }
  });

  control.delete("/label", middlewareAuth ,async (req, res) => {
    try {
      const id = req.query["id"];
      const label = await labelsModel.deleteOne({ _id: id });
      res.json({ message: "sucess delete label ", labelId: id });
    } catch (error) {
      res.status(500).json({ message: "error when delete label" });
    }
  });

  return control;
};
