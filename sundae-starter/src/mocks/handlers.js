import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("http://localhost:3030/scoops", () => {
    return HttpResponse.json([
      { name: "chocolate", imagePath: "/images/chocolate.png" },
      { name: "vanilla", imagePath: "/images/vanilla.png" },
    ]);
  }),
];