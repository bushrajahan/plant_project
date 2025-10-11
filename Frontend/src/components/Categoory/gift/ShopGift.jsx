import React, { useEffect, useState } from 'react';
import Title from '../../Reusable/Title';
import Card from '../../Card/Card';

const ShopGifts = () => {
  const [gifts, setGifts] = useState([]);
  const [filteredGifts, setFilteredGifts] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');

  // Fetch gift data
  useEffect(() => {
    fetch('/gift.json') // ✅ Must be inside public folder
      .then((res) => res.json())
      .then((data) => {
        setGifts(data);
        setFilteredGifts(data); // show all by default
      })
      .catch((err) => console.error('Error fetching gifts data', err));
  }, []);

  // Filter handler
  const handleFilter = (type) => {
    setActiveFilter(type);
    if (type === 'All') {
      setFilteredGifts(gifts);
    } else {
      const filtered = gifts.filter((gift) => gift.category === type);
      setFilteredGifts(filtered);
    }
  };

  // Example categories for gift filter
  const types = ['All', 'Shop Gifts'];

  return (
    <div className="p-8 bg-green-100 m-10 rounded-2xl shadow-md">
      <Title text="🎁 Heartfelt Gifts: Bring Joy to Every Occasion" />

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => handleFilter(type)}
            className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
              activeFilter === type
                ? 'bg-green-700 text-white'
                : 'bg-white text-green-700 border border-green-700 hover:bg-green-700 hover:text-white'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Gift Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredGifts.map((gift) => (
          <Card key={gift.id} item={gift} />
        ))}
      </div>
    </div>
  );
};

export default ShopGifts;
