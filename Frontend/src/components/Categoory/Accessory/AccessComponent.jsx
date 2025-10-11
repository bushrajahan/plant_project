import React, { useEffect, useState } from 'react';
import Title from '../../Reusable/Title';
import Card from '../../Card/Card';

const AccessComponet = () => {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');

  // Fetch plant data
  useEffect(() => {
    fetch('/access.json')
      .then((res) => res.json())
      .then((data) => {
        setPlants(data);
        setFilteredPlants(data); // show all by default
      })
      .catch((err) => console.error('Error fetching data', err));
  }, []);

  // Filter handler
  const handleFilter = (type) => {
    setActiveFilter(type);
    if (type === 'All') {
      setFilteredPlants(plants);
    } else {
      const filtered = plants.filter((plant) => plant.category === type);
      setFilteredPlants(filtered);
    }
  };

  // Example types for buttons
  const types = ['All', 'Accessories'];

  return (
    <div className="p-8 bg-green-100 m-10">
      <Title text="🌿 Nature’s Touch: Boost Your Well-Being" />

      {/* Filter Buttons */}
      <div className="flex justify-center items-center flex-wrap gap-4 mb-8">
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

      {/* Plant Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredPlants.map((plant) => (
          <Card key={plant.id} item={plant}></Card>
        ))}
      </div>
    </div>
  );
};

export default AccessComponet;
