export const drinks = (state = [], action) => {
  switch (action.type) {
    case 'GET_DRINKS':
      if(state.length === 0) {
        return [...state, ...action.drinks]
      } else {
        return state;
      }
    default:
      return state;
  }
}
