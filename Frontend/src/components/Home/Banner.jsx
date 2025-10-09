// Banner.jsx
import React from "react";


const Banner = () => {
  return (
    <section className=" py-12 md:py-20 text-white  font-sans bg-[#596a5a]">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 px-6 md:px-12">
        
        {/* Left Side */}
        <div className="flex flex-col items-start text-left space-y-6 lg:w-1/2">
          {/* Tag */}
          <span className="px-1 py-1   font-medium font-sans">
            BEST QUALITY PLANTS
          </span>

          {/* Heading */}
          <h1 className="text-3xl md:text-xl font-sans font-bold   leading-snug">
            DISCOVER AMAZING <br /> VARIETY OF PLANTS
          </h1>

          {/* Features */}
         

          {/* Description */}
          <p className=" text-sm md:text-base max-w-md">
            From vibrant flowering plants to lush tropical greens, we offer an incredible variety to turn your space into a living paradise.
          </p>

          {/* Button */}
          <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-4 py-4  shadow-md transition font-sans">
            SHOP NOW
          </button>
        </div>

        {/* Right Side */}
        <div className="relative lg:w-1/2 flex justify-center">
          <img src='/1.webp' alt="Plant" className="w-[350px] md:w-[450px] drop-shadow-xl" />

          {/* Floating Card */}
          <div className="absolute bottom-6 left-6 bg-white/70 backdrop-blur-md px-4 py-3 rounded-xl shadow-md">
            <p className="text-sm font-medium text-gray-700 font-sans">
              Algonema Plant with Teracotta Pot
            </p>
            <div className="flex text-yellow-500 text-lg mt-1">
              ⭐⭐⭐⭐⭐
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Small reusable component for features
const FeatureBox = ({ icon, text }) => (
  <div className="flex items-center gap-2 bg-white/70 py-2 rounded-lg  p-2 bg-white  ">
    <span className="text-sm ">{icon}</span>
    <span className=" font-medium text-sm text-green-700  font-sans">{text}</span>
  </div>
);

export default Banner;
