const { HttpError } = require("../helpers");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      if (req.method === "PUT") {
        next(HttpError(400, "missing fields"));
      } else if (req.method === "PATCH") {
        next(HttpError(400, "missing field favorite"));
      }
      next(HttpError(400, "missing required name field"));
    }
    next();
  };
  return func;
};

module.exports = validateBody;
