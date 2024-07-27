import { render, screen } from "@testing-library/react";

import { MuiMode } from "./MuiMode";
import { AppProviders } from "../../providers/AppProviders";

describe("Mui Mode", () => {
  test("renders text correctly", () => {
    render(<MuiMode />, {
      wrapper: AppProviders,
    });
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("dark mode");
  });
});
