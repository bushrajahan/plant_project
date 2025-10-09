import React, { useState, useEffect } from "react";
import FruitCard from "./FruitCard";

export default function Fruits() {
  const [fruits, setFruits] = useState([]);
  const [category, setCategory] = useState("Fruit Trees"); // default category
  const [filteredFruits, setFilteredFruits] = useState([]);

  useEffect(() => {
    fetch("/fruits.json")
      .then((res) => res.json())
      .then((data) => {
        setFruits(data);
        setFilteredFruits(data.filter((item) => item.category === category));
      });
  }, []);

  // whenever category changes, update the visible list
  useEffect(() => {
    const filtered = fruits.filter((item) => item.category === category);
    setFilteredFruits(filtered);
  }, [category, fruits]);

  const categories = [
    "Fruit Trees",
    "Flower Trees",
    "Decorative Plants",
    "Spice Plants",
    "Medicinal Plants",
    "Timber Trees",
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
          Our Seeds Collection
        </h2>

        {/* Category Buttons */}
        <div className="flex justify-center mb-6 space-x-6 text-lg font-medium flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-3 py-1 transition-all duration-200 ${
                category === cat
                  ? "text-green-600 border-b-2 border-green-600"
                  : "hover:text-green-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Items */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredFruits.length > 0 ? (
            filteredFruits.map((fruit) => (
              <FruitCard key={fruit.id} fruit={fruit} />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-600">
              No items found for this category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
