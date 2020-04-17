export const drinks = (state = [], action) => {
  switch (action.type) {
    case 'GET_DRINKS':
      return action
    default:
      return state;
  }
}
