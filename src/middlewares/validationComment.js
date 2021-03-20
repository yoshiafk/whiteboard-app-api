const joi = require("joi");

module.exports = {
  createComment: async (req, res, next) => {
    try {
      const rules = joi.object({
        userId: joi.string().required(),
        cardId: joi.string().required(),
        description: joi.string().min(1).max(255).required(),
      });

      await rules.validateAsync(req.body);

      next();
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error.message });
    }
  },

  updateComment: async (req, res, next) => {
    try {
      const rules = joi.object({
        id: joi.string().required(),
        description: joi.string().min(1).max(255).required(),
      });

      await rules.validateAsync(req.body)

      next()
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
    }
}
