const mongoose = require("mongoose");

const app = require("./app");

const { DB_HOST } = process.env;

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST, { useNewUrlParser: true })
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
