const db = require("../models");

exports.getAll = (req, res) => {
  db.Product.find().then((products) => res.status(200).json(products));
};

exports.getSearched = (req, res) => {
  db.Product.find({
    name: { $regex: `.*${req.query.search}.*`, $options: "i" },
  }).then((products) => res.status(200).json(products));
};

exports.addCart = (req, res) => {
  db.Product.findOne({ pid: req.query.pid }).then((product) =>
    res.status(200).json(product)
  );
};

exports.updateQ = (req, res) => {
  const selectedProducts = req.body.selectedProducts;
  const quantities = req.body.quantities;

  const promise = selectedProducts.map(async (selectedProduct, i) => {
    let diff = 0;

    await db.Product.findOne({ pid: Number(selectedProduct.pid) }).then(
      (product) => {
        diff = Number(product.qty) - Number(quantities[i]);
      }
    );

    return await db.Product.findOneAndUpdate(
      { pid: selectedProduct.pid },
      {
        $set: {
          qty: diff,
        },
      },
      { returnDocument: "after" }
    );
  });

  Promise.all(promise).then((result) => {
    res.status(200).json(result);
  });

  //   for (pid of pids) {
  //     await db.Product.updateOne(
  //       { pid: pid },
  //       {
  //         $set: {},
  //       }
  //     );
  //   }
};
