import { render, screen } from "../../../test-utils/testing-library-utils";
import { server } from "../../../mocks/server";
import { HttpResponse, http } from "msw";

import OrderConfirmation from "../OrderConfirmation";
import { expect } from "vitest";

test("error response from server fot submitting order", async () => {
  server.resetHandlers(
    http.post("http://localhost:3030/order", () => {
      return new HttpResponse(null, { status: 500 });
    })
  );

  render(<OrderConfirmation />);

  const alert = await screen.findByRole("alert");

  expect(alert).toHaveTextContent(
    "An unexpected error occurred. Please try again later"
  );
});
