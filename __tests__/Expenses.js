import React from 'react';
import Expenses from 'features/Expenses';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<Expenses />).toJSON();
  expect(rendered).toBeTruthy();
});
