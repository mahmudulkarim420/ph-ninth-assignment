import React from 'react';
import toast from 'react-hot-toast';

const Support = () => {
    const handleToast = (type) => {
    if (type === 'email') {
      toast.success('Email support selected!');
    } else if (type === 'phone') {
      toast.success('Phone support selected!');
    } else if (type === 'faq') {
      toast.success('Redirecting to FAQ!');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">Support</h1>

      <p className="text-center text-gray-700 text-lg mb-6">
        Need help? Our support team is here to assist you. Reach out to us for any inquiries or issues.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-10">
        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3 text-center">
          <h2 className="text-2xl font-semibold mb-2">Email Support</h2>
          <p className="text-gray-600 mb-4">support@skillswap.com</p>
          <button onClick={() => handleToast('email')} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Contact via Email
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3 text-center">
          <h2 className="text-2xl font-semibold mb-2">Phone Support</h2>
          <p className="text-gray-600 mb-4">+880 1234 567890</p>
          <button onClick={() => handleToast('phone')} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Call Now
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3 text-center">
          <h2 className="text-2xl font-semibold mb-2">FAQ</h2>
          <p className="text-gray-600 mb-4">Find answers to common questions</p>
          <button onClick={() => handleToast('faq')} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Visit FAQ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Support;
