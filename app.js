//jshint esversion:6
<<<<<<< HEAD
require('dotenv').config();
=======
>>>>>>> fix issues
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
<<<<<<< HEAD
      'x-rapidapi-key': process.env.API_KEY
    }
  };


=======
      'x-rapidapi-key':  "43d388d2bfmsha6de18516b7961fp1389c5jsn6ab3274de6f9"
    }
  };

>>>>>>> fix issues
  request(options, function(error, response, body) {
    if (error) throw new Error(error);
     searchRes=JSON.parse(body).results;
    console.log(searchRes);
    res.redirect("/");

  });
});

<<<<<<< HEAD



=======
>>>>>>> fix issues
app.get("/recipes/:recipeID", function(req, res){

  const requestedID = req.params.recipeID;
console.log(requestedID);


var options = {
  method: 'GET',
  url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/'+requestedID+'/information',
  headers: {
    'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
    'x-rapidapi-key': '43d388d2bfmsha6de18516b7961fp1389c5jsn6ab3274de6f9'
  }
};

request(options, function (error, response, body) {
  const results = JSON.parse(body);
  const ingredients = results.extendedIngredients;
  const servings= results.servings;
  const directions = results.instructions;
  const imageURL = results.image;
const title=results.title;

	if (error) throw new Error(error);
  res.render("recipe",{
    ingredients:ingredients,
    title:title,
    servings:servings,
    directions:directions,
    imageURL:imageURL
  });
});

});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server started ");
});
