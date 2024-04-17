import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SummaryForm from "../SummaryForm";

describe("SummaryForm", () => {
  it("checkbox unchecked and checked, button enables and disables", () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();

    const confirmOrderButton = screen.getByRole("button", {
      name: /confirm order/i,
    });
    expect(confirmOrderButton).toBeDisabled();

    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();

    expect(confirmOrderButton).toBeEnabled();

    fireEvent.click(checkbox);

    expect(confirmOrderButton).toBeDisabled();
  });

  it("popover test", async () => {
    const user = userEvent.setup();
    render(<SummaryForm />);

    const nullPopover = screen.queryByText(
      /no ice cream will actually be delivered/i
    );

    expect(nullPopover).not.toBeInTheDocument();

    const termsAndConditions = screen.getByText(/terms and conditions/i);

    await user.hover(termsAndConditions);

    const popover = screen.getByText(
      /no ice cream will actually be delivered/i
    );
    expect(popover).toBeInTheDocument();

    await user.unhover(termsAndConditions);

    expect(popover).not.toBeInTheDocument();
  });
});
