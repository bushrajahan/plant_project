import React, { useEffect, useState } from "react";

import Carousel from "../Reusable/Carasoul";
import Card from "../Card/Card";
const TodayDeal = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading products", err));
  }, []);

  return (
    
    <Carousel
      title="🌿 Today Deals"
      items={products}
      renderItem={(product) => <Card item={product} />}
    />
  );
};

export default TodayDeal;
