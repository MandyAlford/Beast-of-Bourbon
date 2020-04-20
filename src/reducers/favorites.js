export const favorites = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      if(!state.includes(action.recipe)){
      return [...state, action.recipe]
    }
    default:
    return state;
  }
}
