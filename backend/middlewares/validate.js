const yup = require("yup");

function validate(schema) {
  return async (req, res, next) => {
    try {
      await schema.validate(req.body, { abortEarly: false });
      next();
    } catch (err) {
      return res.status(400).json({ error: "Erro de validação", details: err.errors });
    }
  };
}

module.exports = validate;
