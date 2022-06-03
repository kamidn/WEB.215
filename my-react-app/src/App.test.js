import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/My React App - Duy Nguyen/i);
  expect(linkElement).toBeInTheDocument();
});
