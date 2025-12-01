import React, { useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const AllItems = () => {
  const [items, setItems] = useState([]);
  const [displayItems, setDisplayItems] = useState([]);
  const [sortOption, setSortOption] = useState('default');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/fakeData.json')
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setDisplayItems(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSort = (e) => {
    const option = e.target.value;
    setSortOption(option);

    let sorted = [...items];

    if (option === 'priceLow') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (option === 'priceHigh') {
      sorted.sort((a, b) => b.price - a.price);
    } else if (option === 'ratingHigh') {
      sorted.sort((a, b) => b.rating - a.rating);
    } else {
      sorted = [...items];
    }

    if (searchTerm) {
      sorted = sorted.filter((item) =>
        item.skillName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setDisplayItems(sorted);
  };

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    let filtered = [...items];

    if (term) {
      filtered = filtered.filter((item) =>
        item.skillName.toLowerCase().includes(term.toLowerCase())
      );
    }

    if (sortOption === 'priceLow') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'priceHigh') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'ratingHigh') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    setDisplayItems(filtered);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6 text-center">
        All Items
      </h1>

      <div className="mb-6 flex flex-col md:flex-row md:justify-between gap-4 items-center">
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search by skill name..."
            value={searchTerm}
            onChange={handleSearch}
            className="border border-gray-300 rounded px-3 py-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-700 text-xl" />
        </div>

        <select
          value={sortOption}
          onChange={handleSort}
          className="border border-gray-300 rounded px-3 py-2 w-full md:w-60 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="default">Sort By</option>
          <option value="priceLow">Price: Low → High</option>
          <option value="priceHigh">Price: High → Low</option>
          <option value="ratingHigh">Rating: High → Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayItems.map((item) => (
          <div
            key={item.skillId}
            className="flex flex-col justify-between rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition h-full"
          >
            <div className="w-full h-48">
              <img
                src={item.image}
                alt={item.skillName}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>

            <div className="p-4 flex flex-col justify-between flex-1">
              <div>
                <h2 className="text-xl font-semibold mb-2">{item.skillName}</h2>
                <p className="text-gray-600 text-sm mb-2">
                  {item.description.length > 80
                    ? item.description.slice(0, 80) + '...'
                    : item.description}
                </p>
                <p className="text-gray-800 font-medium mb-1">
                  Price: ${item.price}
                </p>
                <p className="text-yellow-500 font-medium">
                  Rating: {item.rating}
                </p>
              </div>

              <Link
                to={`/skills/${item.skillId}`}
                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition text-center"
              >
                See More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllItems;
