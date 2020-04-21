import { drinks } from '../reducers/drinks';

describe('Reducer: drinks', () => {
  it('should return the initial state', () => {
    const result = drinks(undefined, {});

    expect(result).toEqual([]);
  });

  it('should return updated state', () => {
    const action = {
      type:'GET_DRINKS',
      drinks: [
        {id: 1, title: 'margarita'},
        {id: 2, title: 'manhattan'}
      ]
    }
    const result = drinks([], action);

    expect(result).toEqual([
      {id: 1, title: 'margarita'},
      {id: 2, title: 'manhattan'}
    ]);
  });
});
