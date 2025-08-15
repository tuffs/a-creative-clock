import { screen, render } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

describe("General App Test Suite", () => {
  it('renders the App component', () => {
    render(<App />);
    const div = screen.getByTestId('App');
    expect(div).toBeInTheDocument();
  });
});
