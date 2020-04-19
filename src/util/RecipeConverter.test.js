import RecipeConverter from './RecipeConverter';
var assert = require('chai').assert;

describe(RecipeConverter, () => {
  it('should remove any key with a property of null', () => {
    const sampleDrink = {
      "idDrink": "11021",
      "strDrink": "Allegheny",
      "strIngredient1": "Dry Vermouth",
      "strIngredient2": "Bourbon",
      "strIngredient3": null,
      "strMeasure1": "1 oz ",
      "strMeasure2": "2 oz ",
      "strMeasure3": null,
    }

    let recipeConverter = new RecipeConverter(sampleDrink);

    assert.deepEqual(recipeConverter.orangizeIngredients(),[
      'Dry Vermouth: 1 oz ', 'Bourbon: 2 oz '
    ])
  });
});
