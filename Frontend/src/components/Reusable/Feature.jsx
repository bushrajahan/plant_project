import React from 'react';


const Feature = ({ title, type, items }) => { // <-- COMMA CHECK: All props are separated here.

  // Base styling for the individual cards (Nutritional style)
  const itemCardClasses = "border-2 border-lime-300 rounded-xl shadow-lg p-5 bg-white w-full max-w-xs transition-transform duration-300 hover:shadow-xl hover:scale-105";

  return (
    <>
  
    <div className="my-8 px-4">
      
      {/* SECTION HEADER */}

  
     

      {/* GRID CONTAINER: Lays items out side-by-side */}
      <div className="p-10  ">
        
        {items.map((item, index) => (
          
          <div 
            key={index} 
            className={itemCardClasses}
          >
            {/* CARD CONTENT */}
            <div className="p-2  ">
              {/* Emoji (The visual focus) */}
              <span className="text-4xl m-2 w-100  ">{item.emoji}</span>
              
              {/* Name */}
              <h3 className="font-bold text-lg text-green-800">{item.name}</h3>
              
            
            </div>
            
          </div>
        ))}
        
      </div>
      
    </div>
    </>
  );
};

export default Feature;