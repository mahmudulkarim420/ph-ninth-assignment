import React, { useEffect, useState } from 'react';
import * as FaIcons from 'react-icons/fa';

const HowItWorks = () => {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    fetch('/steps.json')
      .then((res) => res.json())
      .then((data) => setSteps(data))
      .catch((err) => console.error('Error fetching steps:', err));
  }, []);

  return (
    <section className="w-[1200px] mx-auto my-16 bg-blue-50 rounded-lg py-10 px-6 shadow-md">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-10">
          ⚙️ How It Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => {
            const IconComponent = FaIcons[step.icon];
            return (
              <div
                key={step.id}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-2"
              >
                {IconComponent && (
                  <IconComponent className="text-blue-600 text-4xl mb-4" />
                )}
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
