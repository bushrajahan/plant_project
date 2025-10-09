import React, { useRef } from "react";

const Carousel = ({ items, renderItem, title }) => {
  const scrollRef = useRef(null);
  const SCROLL_DISTANCE = 320; // adjust based on card width + margin

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -SCROLL_DISTANCE, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: SCROLL_DISTANCE, behavior: "smooth" });
  };

  return (
    <div className="bg-[#F8F8F0] py-12 px-4 md:px-10 font-sans my-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        {title && (
          <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-3">
            <h2 className="text-3xl font-extrabold text-[#486B49] tracking-wide">{title}</h2>
            <div className="flex items-center space-x-4">
              <button
                onClick={scrollLeft}
                className="p-2 border rounded-full text-gray-700 hover:bg-gray-400"
              >
                ❮
              </button>
              <button
                onClick={scrollRight}
                className="p-2 border rounded-full text-gray-700 hover:bg-gray-400"
              >
                ❯
              </button>
            </div>
          </div>
        )}

        {/* Carousel */}
        {items.length > 0 ? (
          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-4 pb-4 scroll-smooth"
            style={{
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // IE 10+
            }}
          >
            {/* Hide scrollbar for Webkit browsers */}
            <style>
              {`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>

            {items.map((item) => (
              <div key={item.id} className="flex-shrink-0 w-80">
                {renderItem(item)}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-10">No items to display.</p>
        )}
      </div>
    </div>
  );
};

export default Carousel;
