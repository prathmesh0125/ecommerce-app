const app = require("./app");
const dotenv = require("dotenv");
const color = require("colors");
const connectDatabase = require("./db/database");

// uncaught error/exception handling
process.on("uncaughtException",(err)=>{
  console.log(err.message);
  console.log("server is shuting down due to uncaught error occur");
  process.exit(1)
})
// port path
dotenv.config({ path: "backend/config/config.env" });
connectDatabase();
app.get("/", function (req, res) {
  res.send("hello Madara");
});
const server = app.listen(process.env.PORT, () => {
  console.log(
    `server is running on http://localhost:${process.env.PORT}`.yellow
  );
});

// unhandled promise rejection if anything happend during database connection

process.on("unhandledRejection", (err) => {
  console.log(err.message);
  console.log("server is shuting down due to internal problem");

  server.close(() => {
    process.exit(1);
  });
});
