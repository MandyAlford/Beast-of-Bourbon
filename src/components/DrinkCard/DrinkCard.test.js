import DrinkCard from './DrinkCard';
import { render } from '@testing-library/react';
import React from 'react';

describe(DrinkCard, () => {
  it('should have a header', () => {
    let { getByText } = render(<DrinkCard name={'Manhattan'}/>)

    expect(getByText('Manhattan')).toBeInTheDocument();
  });

  it('should have an image', () => {
    let { getByRole } = render(
      <DrinkCard
      name={'Manhattan'}
      image={'http://picture.jpg'}
      />)

      expect(getByRole('img')).toBeInTheDocument()
  });
});
