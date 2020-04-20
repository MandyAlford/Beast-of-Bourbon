export const getDrinks = (drinks) => ({
  type: 'GET_DRINKS',
  drinks
});

export const getDrinkRecipe = (drinkRecipe) => ({
    type: 'GET_RECIPE',
    drinkRecipe
  });

export const addDrinkToFavorites = (recipe) => ({
    type: 'ADD_FAVORITE',
    recipe
  });

// export const getFavoriteDrinks = () => ({
//   type: 'GET_FAVORITES'
// })
