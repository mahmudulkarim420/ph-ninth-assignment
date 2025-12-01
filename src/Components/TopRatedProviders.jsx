import React, { useEffect, useState } from 'react';

const TopRatedProviders = () => {
  const [topProviders, setTopProviders] = useState([]);

  useEffect(() => {
    fetch('/fakeData.json')
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a, b) => b.rating - a.rating).slice(0, 4);
        setTopProviders(sorted);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="my-16 bg-blue-50 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">
          🌟 Top Rated Providers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topProviders.map((provider) => (
            <div
              key={provider.skillId}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-2 flex flex-col items-center p-4"
            >
              <img
                src={provider.image}
                alt={provider.skillName}
                className="w-full h-44 object-cover rounded-xl mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 text-center">
                {provider.providerName}
              </h3>
              <p className="text-gray-500 text-sm text-center mt-1">
                {provider.skillName}
              </p>
              <p className="text-yellow-500 font-bold mt-2">
                ⭐ {provider.rating}
              </p>
              <p className="text-gray-600 text-sm mt-1">{provider.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRatedProviders;
