import { render, screen } from "@testing-library/react";

import Options from "../Options";

describe("Options", () => {
  test("displays image for each scoop", async () => {
    render(<Options optionType="scoops" />);

    const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
    expect(scoopImages).toHaveLength(2);

    const altText = scoopImages.map((el) => el.alt);
    expect(altText).toStrictEqual(["chocolate scoop", "vanilla scoop"]);
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
    expect(imageTitles).toStrictEqual([
      "cherries topping",
      "M&Ms topping",
      "hot fudge topping",
    ]);
  });
});
