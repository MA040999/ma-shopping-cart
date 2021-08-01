const mongoose = require("mongoose");
const db = require("./models");

db.Product.find().then((products) => console.log(products));

// db.Order.create({
//   items: [
//     {
//       product: "606fdbc110048c651641b580",
//       qty: 1,
//     },
//     {
//       product: "606fdbc110048c651641b581",
//       qty: 2,
//     },
//   ],
// }).then((res) => {
//   console.log(res);
//   process.exit();
// });

// db.Order.find({ orderId: 4 })
// .populate('items.product')
// .then(order => {
//     console.log(JSON.stringify(order, null, '  '));
//     process.exit();
// })
