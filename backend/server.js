const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const postRoutes = require("./routes/posts");

main().catch(err => console.error("MongoDB connection Fail!" + err));

async function main() {
      await mongoose.connect(process.env.MONGO_URL);
      console.log('Mongodb connection successful.')
      // mongoose.set('debug', true)
}

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(express.json());
app.use("/posts", postRoutes);

app.listen(process.env.PORT || 5000, () => {
      console.log(`Backend server is running on port: ${process.env.PORT}`);
});