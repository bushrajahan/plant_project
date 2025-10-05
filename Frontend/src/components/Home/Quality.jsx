
import React, { useEffect, useState } from 'react';
import Feature from '../Reusable/Feature';



const Quality= () => {
    const SeeMoreButton = () => (
  <button className="text-md font-medium text-green-600 hover:text-green-800 transition-colors duration-200 hover:underline px-4">
    See More →
  </button>
);
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    // Fetch JSON dynamically
    fetch('/quality.json')
      .then((res) => res.json())
      .then((data) => setFeatures(data))
     
      .catch((err) => console.error('Error loading features:', err));
  }, []);

  return (
    <>
       {/* HEADER SECTION with Title and See More Button */}
      <div className="flex justify-between items-center m-6  pb-2">
        <h2 className="text-3xl font-extrabold text-[#486B49] tracking-wide flex items-center">
          🌱 Seed Quality & Certification
        </h2>
        {/* The See More Button is placed here */}
        <SeeMoreButton />
      </div>

    <div className="px-4 md:px-8 lg:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
      
      {features.length > 0 ? (
        features.map((feature) => (
          <Feature
            key={feature.id}
            title={feature.title}
            items={feature.items}
            type={feature.type}
          />
        ))
      ) : (
        <p className="text-center text-gray-500">Loading features...</p>
      )}
    </div>
    </>
  );
};

export default Quality;
