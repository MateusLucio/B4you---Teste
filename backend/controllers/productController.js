const { Product } = require("../models");

module.exports = {
  async index(req, res) {
    const products = await Product.findAll();
    return res.json(products);
  },

  async show(req, res) {
    const product = await Product.findByPk(req.params.id);
    if (!product)
      return res.status(404).json({ error: "Produto não encontrado" });
    return res.json(product);
  },

  async store(req, res) {
    const product = await Product.create(req.body);
    return res.status(201).json(product);
  },

  async update(req, res) {
    const product = await Product.findByPk(req.params.id);
    if (!product)
      return res.status(404).json({ error: "Produto não encontrado" });
    await product.update(req.body);
    return res.json(product);
  },

  async destroy(req, res) {
    const product = await Product.findByPk(req.params.id);
    if (!product)
      return res.status(404).json({ error: "Produto não encontrado" });
    await product.destroy();
    return res.status(204).send();
  },
};
