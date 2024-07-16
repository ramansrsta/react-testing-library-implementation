import { render, screen } from "@testing-library/react";
import { Application } from "./Application";
import exp from "constants";

describe("Application", () => {
  test("renders form with name input", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", { level: 2 });
    expect(sectionHeading).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", { name: "Name" });
    expect(nameElement).toBeInTheDocument();

    const nameElement2 = screen.getByPlaceholderText("Fullname");
    expect(nameElement2).toBeInTheDocument();

    const nameElement3 = screen.getByTestId("name");
    expect(nameElement3).toBeInTheDocument();

    const nameElement4 = screen.getByDisplayValue("Raman");
    expect(nameElement4).toBeInTheDocument();

    const paragraphElement = screen.getByText("All fields are mandatory");
    expect(paragraphElement).toBeInTheDocument();

    const spanElement = screen.getByTitle("close");
    expect(spanElement).toBeInTheDocument();

    const imageElement = screen.getByAltText("a person with a laptop");
    expect(imageElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", { name: "Bio" });
    expect(bioElement).toBeInTheDocument();

    const jobElement = screen.getByRole("combobox");
    expect(jobElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button", { name: "Submit" });
    expect(submitButtonElement).toBeInTheDocument();
  });
});
