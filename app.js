const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// import routes
const routes = require("./routes");

// configure dotenv
dotenv.config();
const PORT = process.env.PORT || 3000;

// connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// enable CORS
app.use(cors());

// parse incoming JSON data
app.use(express.json());

// use routes
app.use(routes);

// start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
