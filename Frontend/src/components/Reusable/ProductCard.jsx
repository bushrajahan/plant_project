import React from "react";

const ProductCard = ({ product }) => {
  const renderStars = (rating) => (
    <div className="flex justify-center text-yellow-500 mb-1 text-lg space-x-0.5">
      {[...Array(5)].map((_, i) => (
        <span key={i}>{i < rating ? "★" : "☆"}</span>
      ))}
    </div>
  );

  return (
    <div className="w-64 flex-shrink-0 p-2 md:p-3">
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
        <div
          className="relative aspect-square flex items-center justify-center p-4"
          style={{ backgroundColor: "#EEF4E9" }}
        >
          {product.isSale && (
            <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-2 py-1 rounded-full font-semibold z-10">
              Sale
            </span>
          )}
          <img
            src={
              product.image
                ? product.image
                : `https://placehold.co/300x300/EEF4E9/506042?text=${encodeURIComponent(
                    product.name
                  )}`
            }
            alt={product.name}
            className="max-w-full max-h-full object-contain"
          />
        </div>

        <div className="p-4 text-center">
          {renderStars(product.rating)}
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 min-h-[2.5em]">
            {product.name}
          </h3>
          <p className="text-gray-600 mt-1">${(product.price || 0).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
