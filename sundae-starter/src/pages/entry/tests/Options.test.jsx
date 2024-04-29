import { render, screen } from "../../../test-utils/testing-library-utils";

import Options from "../Options";

describe("Options", () => {
  test("displays image for each scoop", async () => {
    render(<Options optionType="scoops" />);

    const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
    expect(scoopImages).toHaveLength(2);

    const altText = scoopImages.map((el) => el.alt);
    expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
  });
});

describe("Toppings", () => {
  test("displays image for toppings", async () => {
    render(<Options optionType="toppings" />);

    const toppingImages = await screen.findAllByRole("img", {
      name: /topping$/i,
    });

    expect(toppingImages).toHaveLength(3);

    const imageTitles = toppingImages.map((img) => img.alt);
    expect(imageTitles).toEqual([
      "Cherries topping",
      "M&Ms topping",
      "Hot fudge topping",
    ]);
  });
});
