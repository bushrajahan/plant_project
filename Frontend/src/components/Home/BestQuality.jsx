import React from 'react';

const BestQuality = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8  font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Left: Text Content */}
        <div className="md:w-1/2 w-full text-center md:text-left mb-10 md:mb-0">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest rounded-full bg-green-200 text-green-700">
            Best Quality Plants
          </span>

          <h1 className="mt-4 text-2xl md:text-6xl font-extrabold text-green-800 leading-tight">
            DISCOVER AMAZING <br className="hidden md:block" />
            <span className="">VARIETY OF PLANTS</span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-green-700/80 max-w-lg">
            From vibrant flowering plants to lush tropical greens, we offer an incredible variety to turn your space into a living paradise.
          </p>

          <button className="mt-10 px-8 py-3 bg-green-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition">
            SHOP NOW
          </button>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-end">
          <img
            src="/7.webp"
            alt="Assorted potted plants"
            className="w-full max-w-md md:max-w-xl h-96 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default BestQuality;
