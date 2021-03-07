const labelsModel = require("../models/labels")();
const control = require("express").Router();
<<<<<<< HEAD
const middlewareAuth = require("../middlewares/tokenAuth");

module.exports = function labelController() {
  control.post("/label", middlewareAuth, async (req, res) => {
=======
// const middlewareAuth = require("../middlewares/tokenAuth");

module.exports = function labelController() {
  control.post("/label", async (req, res) => {
>>>>>>> b6ee9593b84791419b15afa4cf7aee750f1b67e2
    try {
      await labelsModel.create(req.body);
      res.json({ message: "success create new label" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "error when create label" });
    }
  });

<<<<<<< HEAD
  control.get("/label", middlewareAuth ,async (req, res) => {
=======
  control.get("/label" ,async (req, res) => {
>>>>>>> b6ee9593b84791419b15afa4cf7aee750f1b67e2
    try {
      const data = await labelsModel.find();
      res.json({ message: "succes get data label", data: data, user: res.locals.user });
    } catch (error) {
      res.status(500).json({ message: "error when get label" });
    }
  });

<<<<<<< HEAD
  control.put("/label", middlewareAuth, async (req, res) => {
=======
  control.put("/label", async (req, res) => {
>>>>>>> b6ee9593b84791419b15afa4cf7aee750f1b67e2
    try {
      const id = req.body["id"];
      const labelName = req.body["labelName"];
      await labelsModel.updateOne({ _id: id }, { labelName: labelName });
      res.json({ message: "success update label", label: labelName });
    } catch (error) {
      res.status(500).json({ message: "error when update label" });
    }
  });

<<<<<<< HEAD
  control.delete("/label", middlewareAuth ,async (req, res) => {
=======
  control.delete("/label" ,async (req, res) => {
>>>>>>> b6ee9593b84791419b15afa4cf7aee750f1b67e2
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
