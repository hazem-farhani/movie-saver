const tesseract = require("tesseract.js");
const { DateTime } = require("luxon");

const Movie = require("../models/movie.model");

exports.getMovies = (req, res, next) => {
   Movie.find().then((movies) => {
      res.status(200).json({
         movies: movies,
      });
   });
};

exports.saveMovie = (imageName) => {
   var dataArr;
   if (imageName) {
      tesseract
         .recognize("./images/" + imageName, "eng")
         .then(({ data: { text } }) => {
            dataArr = text.split("\n");
            for (let i = 0; i < dataArr.length; i++) {
               if (dataArr[i] === "") {
                  dataArr.splice(i, 1);
               }
            }
            // creation and save to db
            var name = dataArr[0].split(":")[1].trim();
            var rating = dataArr[1].split(":")[1].trim();
            var year = dataArr[2].split(":")[1].trim();
            let diff = DateTime.fromFormat(year, "yyyy").diffNow("years");
            diff = diff.toObject();
            diff = diff["years"];
            diff = diff * -1;
            diff = diff.toFixed(2);

            const movie = new Movie({
               name: name,
               rating: rating,
               year: year,
               age: diff,
            });
            movie.save().then((result) => {
               console.log("movie saved!");
               console.log(result);
            });
         });
   }
};
