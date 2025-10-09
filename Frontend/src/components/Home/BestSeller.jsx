import React, { useEffect, useState } from "react";

import Carousel from "../Reusable/Carasoul";
import Card from "../Card/Card";
const BestSeller = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading products", err));
  }, []);

  return (
    <Carousel
      title="🌿 BEST SELLER"
      items={products}
      renderItem={(product) => <Card key={product.id} item={product} />}
    />
  );
};

export default BestSeller;
