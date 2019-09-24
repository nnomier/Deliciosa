//jshint esversion:6
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const ejs = require("ejs");
const app = express();
  let searchRes=[];
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.set('view engine', 'ejs');


app.get("/", function(req, res) {
  res.render("home", {
    searchRes: searchRes
    });
    searchRes=[];
});

app.post("/", function(req, res) {
  var recipe = req.body.recipe;
  console.log(recipe);

  var options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search',
    qs: {
      query: recipe
    },
    headers: {
      'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      'x-rapidapi-key': process.env.API_KEY
    }
  };


  request(options, function(error, response, body) {
    if (error) throw new Error(error);
     searchRes=JSON.parse(body).results;
    console.log(searchRes);
    res.redirect("/");

  });
});




app.listen(3000, function() {
  console.log("running on port 3000");
});
