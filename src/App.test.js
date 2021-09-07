import { render, screen } from '@testing-library/react';
import {Mycomp} from './App';

test('renders learn react link', () => {
  render(<Mycomp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
