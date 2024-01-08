import React from 'react';
import { render } from '@testing-library/react';
import { BasicHelloWorld } from './hello-world.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicHelloWorld />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
