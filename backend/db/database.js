
const mongoose = require("mongoose");
const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then((data) => {
      console.log(`Database conection successful on ${data.connection.host}`.green);
    })
    //no need catch because we handled in server.js
    
};
module.exports = connectDatabase;
