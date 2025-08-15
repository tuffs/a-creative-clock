import { screen, render } from "@testing-library/react";
import Clock from "./Clock";
import "@testing-library/jest-dom";

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

});