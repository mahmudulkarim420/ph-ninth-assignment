// src/Components/WhyChooseUs.jsx
import React, { useEffect, useState } from "react";

const WhyChooseUs = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("/features.json") // public folder-এ features.json রাখতে হবে
      .then((res) => res.json())
      .then((data) => setFeatures(data))
      .catch((err) => console.error("Error fetching features:", err));
  }, []);

  return (
    <section className="py-16 bg-blue-50 mt-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-10">Why Choose SkillSwap</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

