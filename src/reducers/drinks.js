export const drinks = (state = [], action) => {
  switch (action.type) {
    case 'GET_DRINKS':
      return [...state, ...action.drinks]
    default:
      return state;
  }
}
