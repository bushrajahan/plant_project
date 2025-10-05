import React from 'react';

// --- Sample Product Data ---
const productsData = [
  { name: 'Peace Lily Plant', price: 195.00, sizeOptions: ['S', 'M', 'L'], rating: 5, imageUrl: 'path/to/img', potStyle: 'orange' },
  { name: 'Plastic Pot', price: 20.00, sizeOptions: null, rating: 5, imageUrl: 'path/to/img', colorOptions: ['#e0e0e0', '#424242', '#a1c29e', '#fbc02d'], potStyle: 'mint' },
  { name: 'Aglonema Plant', price: 195.00, sizeOptions: null, rating: 5, imageUrl: 'path/to/img', potStyle: 'orange' },
  { name: 'Jade Plant Mini', price: 195.00, sizeOptions: null, rating: 5, imageUrl: 'path/to/img', potStyle: 'white' },
  { name: 'Monstera Deliciosa Plant', price: 195.00, sizeOptions: null, rating: 5, imageUrl: 'path/to/img', potStyle: 'brown' },
  { name: 'Anthurium Red Plant', price: 195.00, sizeOptions: null, rating: 5, imageUrl: 'path/to/img', potStyle: 'white' },
  { name: 'Snake Plant', price: 195.00, sizeOptions: null, rating: 5, imageUrl: 'path/to/img', potStyle: 'light-beige' },
  { name: 'Calathea Sanderiana', price: 195.00, sizeOptions: null, rating: 5, imageUrl: 'path/to/img', potStyle: 'gray' },
];

// --- Helper Components ---

const StarRating = ({ rating }) => (
  <div className="flex justify-center text-yellow-500 mb-2">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className={`w-4 h-4 ${i < rating ? 'fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
        <path d="M10 15l-5.878 3.09 1.123-6.545L.487 7.02l6.56-.955L10 0l2.953 6.065 6.56.955-4.758 4.525 1.123 6.545z" />
      </svg>
    ))}
  </div>
);

const CheckboxItem = ({ label }) => (
  <label className="flex items-center text-sm mb-2 cursor-pointer text-gray-700 hover:text-green-700 transition">
    <input 
      type="checkbox" 
      className="mr-2 h-4 w-4 rounded text-green-600 focus:ring-green-500 border-gray-300" 
    />
    {label}
  </label>
);

// --- Main Component ---
const ShopCard = () => {
  // State for filter values (simplified for demonstration)
  const [minPrice, setMinPrice] = React.useState(0);
  const [maxPrice, setMaxPrice] = React.useState(2000);

  // Custom colors for background and highlight to match the image's aesthetic
  const primaryGreen = 'text-green-800';
  const lightBg = 'bg-[#f7fdf5]'; // Approximates the overall light background
  const cardBg = 'bg-[#eef4ed]'; // Approximates the very light green card background

  return (
    <div className={`min-h-screen p-8 ${lightBg} font-sans`}>
      <div className="max-w-7xl mx-auto flex gap-8">
        
        {/* === Sidebar Filters === */}
        <div className="w-[280px] flex-shrink-0 space-y-6">

          {/* Price Filter */}
          <div className="p-5 bg-white rounded-lg shadow-md border border-gray-100">
            <h2 className={`text-xl font-semibold mb-4 ${primaryGreen}`}>Price ($)</h2>
            <div className="relative pt-2 pb-6">
                {/* Range Slider Track */}
                <input
                    type="range"
                    min="0"
                    max="2000"
                    value={minPrice}
                    onChange={(e) => setMinPrice(Number(e.target.value))}
                    className="w-full h-2 bg-gray-300 rounded-full appearance-none cursor-pointer"
                    // Custom style for the filled-in track (approximation)
                    style={{ 
                        background: `linear-gradient(to right, #4CAF50 0%, #4CAF50 ${minPrice/20}%, #d1d5db ${minPrice/20}%, #d1d5db 100%)`,
                        '--tw-ring-color': 'transparent' // Disable focus ring
                    }}
                />
            </div>
            <div className="flex justify-between mt-1 text-sm font-medium">
              <span className="text-gray-500">Min: <strong className="text-gray-800">{minPrice}</strong></span>
              <span className="text-gray-500">Max: <strong className="text-gray-800">{maxPrice}</strong></span>
            </div>
          </div>

          {/* Categories Filter */}
          <div className="p-5 bg-white rounded-lg shadow-md border border-gray-100">
            <h2 className={`text-lg font-semibold mb-4 border-b pb-2 text-gray-800`}>Categories</h2>
            <div className="space-y-1">
              {['House Plants', 'Potter Plants', 'Small Plants', 'Medium Plants', 'Big Plants', 'Seeds', 'Terariums'].map(cat => (
                <CheckboxItem key={cat} label={cat} />
              ))}
            </div>
          </div>
          
          {/* Color Filter */}
          <div className="p-5 bg-white rounded-lg shadow-md border border-gray-100">
            <h2 className={`text-lg font-semibold mb-4 border-b pb-2 text-gray-800`}>Color</h2>
            <div className="space-y-1">
              {['Black', 'White', 'Grey', 'Brown', 'Red', 'Yellow'].map(color => (
                <CheckboxItem key={color} label={color} />
              ))}
            </div>
          </div>
        </div>

        {/* === Product Grid === */}
        <div className="flex-grow">
          <div className="grid grid-cols-4 gap-8">
            {productsData.map((product, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                
                {/* Product Image Card Area */}
                <div className={`relative w-full aspect-square ${cardBg} p-4 rounded-lg flex items-center justify-center overflow-hidden`}>
                    {/* SALE Badge */}
                    <span className="absolute top-0 left-0 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-br-lg z-10">
                      Sale
                    </span>
                    {/* Placeholder for Product Image */}
                    <div className="w-full h-full flex items-center justify-center">
                        <img 
                            src={product.imageUrl} 
                            alt={product.name} 
                            // Add a class here to style the pot placeholder if using dummy images
                            className="max-h-full max-w-full object-contain" 
                        />
                         {/* Fallback Placeholder (remove if using actual images) */}
                        <div className="w-3/4 h-3/4 bg-gray-200 flex items-center justify-center absolute rounded-full opacity-0">
                           <span className="text-gray-500 text-sm">Image</span>
                        </div>
                    </div>
                </div>
                
                {/* Product Details */}
                <div className="mt-3 w-full">
                  <StarRating rating={product.rating} />
                  <p className="font-semibold text-gray-800 leading-tight">{product.name}</p>
                  
                  {/* Price and Options */}
                  <div className="mt-1">
                    <p className="text-base font-medium text-gray-600">${product.price.toFixed(2)}</p>
                    
                    {/* Size Options (e.g., Peace Lily) */}
                    {product.sizeOptions && (
                      <div className="flex justify-center space-x-2 mt-2">
                        {product.sizeOptions.map(size => (
                          <span 
                            key={size}
                            className={`px-3 py-1 text-xs border rounded-md cursor-pointer transition 
                                ${size === 'M' ? 'bg-gray-800 text-white border-gray-800' : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'}`}
                          >
                            {size}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Pot Color Options (e.g., Plastic Pot) */}
                    {product.colorOptions && (
                        <div className="flex justify-center space-x-1 mt-2">
                           {product.colorOptions.map((color, i) => (
                            <span 
                                key={i}
                                className={`w-4 h-4 rounded-full border-2 cursor-pointer 
                                  ${i === 2 ? 'border-gray-800 p-0.5' : 'border-gray-200'}`} // Active color is mint (#a1c29e) in the image
                                style={{ backgroundColor: color }}
                            ></span>
                           ))}
                        </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;