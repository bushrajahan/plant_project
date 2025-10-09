import React, { useState, useEffect } from "react";
import { useCart } from "../Cart/CartContext";
import Card from "../Card/Card";

const Shop = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  // Fetch JSON dynamically
  useEffect(() => {
    fetch("/product.json") // Make sure this path is correct in public folder
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  // Get unique categories from products
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  // Filter products by selected category
  const filteredProducts =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const priceA = parseInt(a.price.replace(/[^\d]/g, ""));
    const priceB = parseInt(b.price.replace(/[^\d]/g, ""));
    if (sortBy === "price-low") return priceA - priceB;
    if (sortBy === "price-high") return priceB - priceA;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div className="max-w-[1280px] mx-auto p-4">
      {/* Header: Category filter + Sorting */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <div>
          <label className="font-medium mr-2">Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 rounded-md p-2"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="font-medium mr-2">Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded-md p-2"
          >
            <option value="default">Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <Card key={product.id} item={product}></Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
