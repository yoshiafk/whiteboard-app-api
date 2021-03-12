const labelController = require("../controllers/labels")();
const router = require("express").Router();

module.exports = function routes() {
  router.use(labelController);

  return router;
};
