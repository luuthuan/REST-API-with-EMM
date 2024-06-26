const PORT = 8000;
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
const authorRoute = require("./routes/author.routes");
const bookRoute = require("./routes/book.routes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("common"));
dotenv.config();

// CONNECT MONGODB
const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect MongoDB", error);
  }
};
connection();

// ROUTES
app.use("/v1/author", authorRoute);
app.use("/v1/book", bookRoute);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
