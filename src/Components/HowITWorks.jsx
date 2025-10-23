// src/Components/HowItWorks.jsx
import React from 'react';
import { FaUserPlus, FaHandshake, FaExchangeAlt, FaStar } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <FaUserPlus className="text-blue-600 text-4xl mb-4" />,
      title: 'Create an Account',
      description:
        'Sign up with your email and set up your skill profile to get started.',
    },
    {
      id: 2,
      icon: <FaHandshake className="text-blue-600 text-4xl mb-4" />,
      title: 'Find a Match',
      description:
        'Browse through available skills or post what you can teach and what you want to learn.',
    },
    {
      id: 3,
      icon: <FaExchangeAlt className="text-blue-600 text-4xl mb-4" />,
      title: 'Exchange Skills',
      description:
        'Connect with others to exchange knowledge through online or in-person sessions.',
    },
    {
      id: 4,
      icon: <FaStar className="text-blue-600 text-4xl mb-4" />,
      title: 'Rate & Review',
      description:
        'After each session, share your feedback to help others choose trusted providers.',
    },
  ];

  return (
    <section className="bg-blue-50 py-16 mt-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-10">
          ⚙️ How It Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-2"
            >
              {step.icon}
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
