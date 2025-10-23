import React, { useEffect, useState } from 'react';
import TopRatedProviders from '../Components/TopRatedProviders';
import Carousel from '../Components/Carousel';
import HowItWorks from '../Components/HowItWorks';
import { Link } from 'react-router-dom'; // Optional: future routing

const Home = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('/fakeData.json')
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error('Failed to load skills:', err));
  }, []);

  return (
    <>
      {/* 🌟 Hero Carousel Section */}
      <div className="home-carousel">
        <Carousel />
      </div>

      {/* 🌿 All Skills Section */}
      <div className="home-page max-w-6xl mx-auto p-6 mt-20">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">
          🌟 All Skills
        </h2>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.skillId}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition flex flex-col"
            >
              <img
                src={skill.image}
                alt={skill.skillName}
                className="w-full h-70 object-cover"
              />
              <div className="p-4 flex-1">
                <h3 className="text-xl font-semibold mb-1">
                  {skill.skillName}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  Provider: {skill.providerName}
                </p>
                <p className="text-gray-700 mb-2">{skill.description}</p>
                <p className="text-gray-800 font-semibold">
                  Price: ${skill.price}
                </p>
                <p className="text-yellow-500 font-semibold">
                  Rating: {skill.rating} ⭐
                </p>
                <p className="text-gray-500 text-sm mb-4">
                  Slots Available: {skill.slotsAvailable}
                </p>
              </div>
              {/* 👇 View Details Button */}
              <div className="p-4 text-center">
                <Link
                  to={`/skills/${skill.skillId}`}
                  className="block bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <TopRatedProviders />
      <HowItWorks />
    </>
  );
};

export default Home;
