const router = require("express").Router();
const controller = require("../controller");
router.post("/add", controller.Orders.addOrder);

module.exports = router;
