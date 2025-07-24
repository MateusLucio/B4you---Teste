import * as Yup from "yup";
import jwt from "jsonwebtoken";

export default {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    });

    try {
      await schema.validate(req.body, { abortEarly: false });
    } catch (err) {
      return res
        .status(400)
        .json({ error: "Erro de validação", messages: err.errors });
    }

    const { email, password } = req.body;

    // User unico
    const validEmail = "admin@b4y.com";
    const validPassword = "123456";

    if (email !== validEmail || password !== validPassword) {
      return res.status(401).json({ error: "Usuário ou senha inválidos" });
    }

    // Gerando token JWT
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    return res.json({
      user: {
        email,
      },
      token,
    });
  },
};
