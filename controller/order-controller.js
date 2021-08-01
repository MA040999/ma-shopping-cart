const db = require("../models");

exports.addOrder = (req, res) => {
  const selectedProducts = req.body.selectedProducts;
  const quantities = req.body.quantities;

  const arr = [];

  const promise = selectedProducts.map((product, i) => {
    return arr.push({ product: product._id, qty: quantities[i] });
  });

  Promise.all(promise).then((result) => {
    console.log("arr :>> ", arr);
    db.Order.create({
      items: arr,
    }).then((result) => {
      res.status(200).json(result);
    });
  });
};
