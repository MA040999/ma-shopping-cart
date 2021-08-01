const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.ugkj9.mongodb.net/sales?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);

module.exports = {
  Product: require("./Product"),
  Order: require("./Order"),
};
