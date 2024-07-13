import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("Greet component should render", () => {
  render(<Greet />);
  const textElement = screen.getByText("Hello");
  expect(textElement).toBeInTheDocument();
});

test("Greet Renders with name if present", () => {
  render(<Greet name="Raman" />);
  const textElement = screen.getByText("Hello Raman");
  expect(textElement).toBeInTheDocument();
});
