
const mongoose = require("mongoose");
const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then((data) => {
      console.log(`Database conection successful on ${data.connection.host}`.blue);
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = connectDatabase;
