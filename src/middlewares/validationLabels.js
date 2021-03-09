const joi = require("joi");

module.exports = {
  createLabel: async (req, res, next) => {
    try {
      const rules = joi.object({
        labelName: joi.string().min(1).max(50).required(),
        color: joi.string().min(1).max(50).required(),
      });

      await rules.validateAsync(req.body);

      next();
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  },

  updateLabel: async (req, res, next) => {
    try {
      const rules = joi.object({
        id: joi.string().required(),
        labelName: joi.string().min(1).max(50).required(),
      });

      await rules.validateAsync(req.body);

      next();
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
};
