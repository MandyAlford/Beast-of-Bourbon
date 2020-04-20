export const recipe = (state = {}, action) => {
  switch (action.type) {
    case 'GET_RECIPE':
      return action.drinkRecipe
    default:
      return state;
  }
}
