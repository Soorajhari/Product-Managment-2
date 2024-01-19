const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const connectToMongoDB = require("./utils/db");
const Router = require("./Route/category");
const app = express();
const port = process.env.PORT || 8080;
console.log(port);



app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));


app.use("/", Router);



connectToMongoDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`server started on  port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB", error);
  });
