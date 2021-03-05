const commentController = require("../controllers/comment")();
const router = require("express").Router();

module.exports = function routes() {
  router.use(commentController);

  return router;
};
