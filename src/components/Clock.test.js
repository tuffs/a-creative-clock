import { screen, render } from "@testing-library/react";
import Clock from "./Clock";
import "@testing-library/jest-dom";
import MockDate from 'mockdate';

describe("Clock Test Suite", () => {

  it("renders a clock", () => {
    render(<Clock />);
    const clock = screen.getByTestId("clock");
    expect(clock).toBeInTheDocument();
  });

  it("displays hours, minutes, and am_or_pm", () => {
    render(<Clock />);

    const hours = screen.getByTestId("hours");
    const colon_seperator = screen.getByTestId("colon_seperator");
    const minutes = screen.getByTestId("minutes");
    const am_or_pm = screen.getByTestId("am_or_pm");

    expect(hours).toBeInTheDocument();
    expect(colon_seperator).toBeInTheDocument();
    expect(minutes).toBeInTheDocument();
    expect(am_or_pm).toBeInTheDocument();
  });

  it('displays a background LED panel for our LEDs', () => {
    render(<Clock />);
    const backgroundLED = screen.getByTestId('backgroundLED');
    expect(backgroundLED).toBeInTheDocument();
  });

  it('displays correct time format and AM/PM', () => {
    MockDate.set('2025-08-15T23:05:00');
    render(<Clock />);
    expect(screen.getByTestId('hours').textContent).toBe('11');
    expect(screen.getByTestId('minutes').textContent).toBe('05');
    expect(screen.getByTestId('am_or_pm').textContent).toContain('PM');
    MockDate.reset();
  });

});