import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
  test("renders form with name input", () => {
    render(<Application />);
    const nameElement = screen.getByTestId("name");
    expect(nameElement).toBeInTheDocument();

    const jobElement = screen.getByRole("combobox");
    expect(jobElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button", { name: "Submit" });
    expect(submitButtonElement).toBeInTheDocument();
  });
});
