const yup = require("yup");

const productSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().positive().required(),
  quantity: yup.number().integer().min(0).required(),
});

module.exports = productSchema;
