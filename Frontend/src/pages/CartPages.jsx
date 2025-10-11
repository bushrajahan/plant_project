import React from "react";
import { useCart } from "../components/Cart/CartContext";
export default function CartPages() {
  const { cart, removeFromCart, clearCart } = useCart();

   const total = cart.reduce((sum, item) => {
    const numericPrice = parseFloat(item.price.replace(/[৳,]/g, "")); // remove "৳" and ","
    return sum + numericPrice * item.quantity;
  }, 0);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6 text-green-700">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty 🛒</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-3">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p>৳{item.price} × {item.quantity}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
          <h3 className="text-xl font-bold mt-6">Total: ৳{total}</h3>
          <button
            onClick={clearCart}
            className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}
