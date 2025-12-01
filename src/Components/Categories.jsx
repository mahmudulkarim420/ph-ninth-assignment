import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/fakeData.json')
      .then(res => res.json())
      .then(data => {
        const uniqueCategories = [...new Set(data.map(item => item.category))];
        setCategories(uniqueCategories);
      });
  }, []);

  return (
    <div className="my-16 max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((cat, idx) => (
          <Link to={`/all-items`} key={idx} className="bg-blue-50 rounded-lg p-6 text-center shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-blue-700">{cat}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
