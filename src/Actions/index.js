export const getDrinks = (drinks) => ({
  type: 'GET_DRINKS',
  drinks
});

export const getDrinkRecipe = (drinkRecipe) => ({
    type: 'GET_RECIPE',
    drinkRecipe
  });

export const toggleFavoriteRecipe = (recipe) => ({
    type: 'TOGGLE_FAVORITE',
    recipe
  });
