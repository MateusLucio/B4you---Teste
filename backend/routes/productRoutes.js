const express = require("express");
const router = express.Router();
const controller = require("../controllers/productController");
const auth = require("../middlewares/authMiddleware");
const validate = require("../middlewares/validate");
const productSchema = require("../schemas/productSchema");

router.use(auth);

router.get("/", controller.index);
router.get("/:id", controller.show);
router.post("/", validate(productSchema), controller.store);
router.put("/:id", validate(productSchema), controller.update);
router.delete("/:id", controller.destroy);

module.exports = router;
