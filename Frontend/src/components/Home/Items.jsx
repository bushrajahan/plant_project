import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Items = () => {
  const [promotions, setPromotions] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    fetch('/category.json') // ✅ file should be inside public/
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch category.json');
        return res.json();
      })
      .then((data) => {
        console.log('Fetched Data:', data);
        setPromotions(data);
      })
      .catch((err) => {
        console.error('Error fetching JSON:', err);
        setError(err.message);
      });
  }, []);

  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (promotions.length === 0) return <p>Loading categories...</p>;

  return (
    <div className="container mx-auto p-4 md:p-4" >
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {promotions.map((item) => (
          <div
            key={item.id}
            className={`relative overflow-hidden rounded-xl shadow-xl flex items-center justify-end p-4  min-h-[300px] `}
          >
            <img
              src={item.imageUrl}
              alt={item.imageAlt}
              className="absolute inset-0 w-full h-full object-cover object-left-top z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/70"></div>
            <div className="relative z-10 text-right max-w-[200px]">
              <p className="text-base font-medium text-gray-700 mb-1">{item.discountText}</p>
              <h3 className="text-3xl font-bold text-gray-800 mb-4 leading-snug">{item.title}</h3>
               <button onClick={()=>navigate(item.linkHref)}
               //navigate dynamically
                className="inline-block px-6 py-2.5 bg-gray-800 text-white text-sm font-medium rounded-md hover:bg-gray-900 transition-colors duration-200"
              >
                {item.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
