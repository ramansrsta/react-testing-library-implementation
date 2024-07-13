import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet Component", () => {
  test("component should render", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });

  test("Renders with name if present", () => {
    render(<Greet name="Raman" />);
    const textElement = screen.getByText("Hello Raman");
    expect(textElement).toBeInTheDocument();
  });
});
