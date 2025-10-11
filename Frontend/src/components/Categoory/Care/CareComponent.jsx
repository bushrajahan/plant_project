import React, { useEffect, useState } from 'react';
import Title from '../../Reusable/Title';
import Card from '../../Card/Card';

const CareComponent = () => {
  const [careItems, setCareItems] = useState([]);
  const [filteredCare, setFilteredCare] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');

  // Fetch garden care data
  useEffect(() => {
    fetch('/care.json') // ✅ Must be inside public folder
      .then((res) => res.json())
      .then((data) => {
        setCareItems(data);
        setFilteredCare(data); // show all by default
      })
      .catch((err) => console.error('Error fetching garden care data', err));
  }, []);

  // Filter handler
  const handleFilter = (type) => {
    setActiveFilter(type);
    if (type === 'All') {
      setFilteredCare(careItems);
    } else {
      const filtered = careItems.filter((item) => item.category === type);
      setFilteredCare(filtered);
    }
  };

  // Example categories for garden care filter
  const types = ['All', 'Garden Care'];

  return (
    <div className="p-8 bg-green-50 m-10 rounded-2xl shadow-md">
      <Title text="🪴 Garden Care Essentials: Keep Your Plants Thriving" />

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

      {/* Care Item Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredCare.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CareComponent;
