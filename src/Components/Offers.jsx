import React, { useState } from 'react';

const Offers = () => {
  const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    setShowToast(true);

    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="w-[1200px] mx-auto my-16 bg-yellow-50 rounded-lg py-10 px-6 shadow-md relative">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-yellow-700">
          Special Offers
        </h2>
        <p className="text-gray-700 mb-6">
          Grab our limited-time offers and discounted courses now!
        </p>
        <button
          onClick={handleClick}
          className="bg-yellow-500 text-white px-6 py-3 rounded hover:bg-yellow-600 transition"
        >
          View Offers
        </button>
      </div>

      {showToast && (
        <div className="fixed bottom-6 right-10 bg-yellow-400 text-white px-6 py-3 rounded shadow-lg animate-bounce">
          No offers available at the moment
        </div>
      )}
    </div>
  );
};

export default Offers;
