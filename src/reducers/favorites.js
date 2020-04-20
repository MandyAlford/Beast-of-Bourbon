export const favorites = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':

      if(!state.map(element => element.idDrink).includes(action.recipe.idDrink)){
        return [...state, action.recipe]
      } else {
        return state.filter(element => element.idDrink !== action.recipe.idDrink)
      }
    default:
      return state;
  }
}
