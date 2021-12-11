const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { DateTime } = require("luxon");

// const missionRoutes = require("./routes/mission.route");
const uploadRoute = require("./routes/upload.route");
const movieRoute = require("./routes/movie.route");

const app = express();
app.use(express.json());

app.use(cors());
app.use("/images", express.static(path.join(__dirname, "images")));

app.use(uploadRoute);
app.use(movieRoute);

const url = "mongodb://127.0.0.1:27017/Movies";
mongoose.Promise = global.Promise;
mongoose
   .connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
   .then(() => {
      console.log("MongoDB is on");
      app.listen(3000);
   })
   .catch((e) => {
      console.log("Error while attempting to connect to MongoDB");
      console.log(e);
   });
