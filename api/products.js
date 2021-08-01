const router = require("express").Router();
const controller = require("../controller");
router.get("/addCart", controller.Products.addCart);
router.get("/all", controller.Products.getAll);
router.get("/search", controller.Products.getSearched);
router.patch("/updateQ", controller.Products.updateQ);

module.exports = router;
