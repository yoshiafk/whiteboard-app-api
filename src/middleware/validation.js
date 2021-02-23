const Joi = require('joi');

const validateBody = (req, res, next) => {
    const { body } = req;

    const listSchema = Joi.object({
        title: Joi.string().regex(/^[a-zA-Z]/).required()

    });

    const validateBody = listSchema.validate(body);

    if(!validateBody.error) {
        next();
    } else {

        res.status(500).json({
            status: 'Validation failed',
            message: validateBody.error.details[0].message
        });
    }
};

module.exports = validateBody;