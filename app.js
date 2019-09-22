var request = require("request");

var options = {
  method: 'GET',
  url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search',
  qs: {
    diet: 'vegetarian',
    excludeIngredients: 'coconut',
    intolerances: 'egg, gluten',
    number: '10',
    offset: '0',
    type: 'main course',
    query: 'burger'
  },
  headers: {
    'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
    'x-rapidapi-key': 'SIGN-UP-FOR-KEY'
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});
