const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
var bodyParser = require('body-parser')

const app = express();
dotenv.config();

// app.use(cors());
app.use(cors({ origin: true }));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));


//router
const brandsRouter = require("./routes/brands.js");
app.use("/api/brands", brandsRouter);

//static Images Folder
app.use("/Images", express.static("./Images"));

//database
const db = require("./models");
db.sequelize.sync();

const PORT = process.env.PORT || 1000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

