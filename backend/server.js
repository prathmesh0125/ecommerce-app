const app = require("./app");
const dotenv = require("dotenv");
const color = require("colors");
const connectDatabase = require("./db/database");
// port path
dotenv.config({ path: "backend/config/config.env" });
connectDatabase();
app.get("/", function (req, res) {
  res.send("hello Madara");
});
app.listen(process.env.PORT, () => {
  console.log(
    `server is running on http://localhost:${process.env.PORT}`.yellow
  );
});
