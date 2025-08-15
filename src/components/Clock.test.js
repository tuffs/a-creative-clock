import { screen, render } from '@testing-library/react';
import Clock from './Clock';
import '@testing-library/jest-dom';

describe("Clock Test Suite", () => {
  it('renders a clock', () => {
    render(<Clock />);
    const clock = screen.getByTestId("clock");
    expect(clock).toBeInTheDocument();
  });
});