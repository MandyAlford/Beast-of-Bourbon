export const favorites = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      if(!state.includes(action.id)){
      return [...state, action.id]
    }
    default:
    return state;
  }
}
