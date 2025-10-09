import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../Cart/CartContext";

export default function Card({ item }) {
  const { addToCart } = useCart()

  return (
    <div className="border rounded-lg p-4 bg-white m-2 p-2 hover:shadow-lg">
      <img src={item?.imageUrl} alt={item.name} className="w-full h-40 object-cover rounded-lg" />
      <h3 className="text-lg font-semibold mt-2">{item?.name}</h3>
      <p className="text-green-700 font-bold">{item?.price}</p>
      <button
        onClick={() => addToCart(item)}
        className="flex items-center justify-center w-full mt-3 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
      >
        <FaShoppingCart className="mr-2" />
        Add to Cart
      </button>
    </div>
  );
}
