import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../Cart/CartContext";

export default function FruitCard({ fruit }) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-lg p-4 bg-white shadow hover:shadow-lg">
      <img src={fruit.imageUrl} alt={fruit.name} className="w-full h-40 object-cover rounded-lg" />
      <h3 className="text-lg font-semibold mt-2">{fruit.name}</h3>
      <p className="text-green-700 font-bold">{fruit.price}</p>
      <button
        onClick={() => addToCart(fruit)}
        className="flex items-center justify-center w-full mt-3 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
      >
        <FaShoppingCart className="mr-2" />
        Add to Cart
      </button>
    </div>
  );
}
