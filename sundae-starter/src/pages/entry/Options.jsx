import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import axios from "axios";
import ScoopOption from "./ScoopOption";
import ToppingOption from "./ToppingOption";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => {
        console.error(error);
      });
  }, [optionType]);

  let ItemComponent = optionType === "scoops" && ScoopOption;
  if (optionType === "toppings") {
    ItemComponent = ToppingOption;
  }

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <Row>{optionItems}</Row>;
}
