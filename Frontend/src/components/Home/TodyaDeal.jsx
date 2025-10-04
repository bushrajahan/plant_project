import React, { useEffect, useState } from "react";
import ProductCard from "../Reusable/ProductCard";
import Carousel from "../Reusable/Carasoul";
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
      renderItem={(product) => <ProductCard product={product} />}
    />
  );
};

export default TodayDeal;
