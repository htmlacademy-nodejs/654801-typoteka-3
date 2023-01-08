"use strict";

const Joi = require(`joi`);
const {HttpCode} = require(`../../constants`);

const schema = Joi.object({
  articleId: Joi.number().integer().min(1),
  commentId: Joi.number().integer().min(1),
});
//TODO: use this
module.exports = (req, res, next) => {
  const params = req.params;

  const {error} = schema.validate(params);

  if (error) {
    return res
      .status(HttpCode.BAD_REQUEST)
      .send(error.details.map((err) => err.message).join(`\n`));
  }

  return next();
};