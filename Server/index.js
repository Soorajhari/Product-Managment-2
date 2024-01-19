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




const corsOptions = {
  origin: 'https://product-managment-client.vercel.app/',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

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
