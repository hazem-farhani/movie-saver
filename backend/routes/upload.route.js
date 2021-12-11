var express = require("express");
var router = express.Router();
var multer = require("multer");

const movieController = require("../controllers/movie.controller");

var storage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, "./images");
   },
   filename: (req, file, cb) => {
      console.log(file);
      var filetype = "";
      if (file.mimetype === "image/gif") {
         filetype = "gif";
      }
      if (file.mimetype === "image/png") {
         filetype = "png";
      }
      if (file.mimetype === "image/jpeg") {
         filetype = "jpg";
      }
      cb(null, file.originalname);
   },
});

var upload = multer({ storage: storage });

router.post("/upload", upload.single("file"), function (req, res, next) {
   if (!req.file) {
      return res.status(500).send({ message: "Upload fail" });
   } else {
      movieController.saveMovie(req.file.filename);
   }
});

module.exports = router;
