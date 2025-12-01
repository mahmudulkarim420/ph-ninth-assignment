import React, { useRef } from 'react';
import toast from 'react-hot-toast';

const Contact = () => {
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent successfully!');
    formRef.current.reset();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        Contact Us
      </h1>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
          <p className="text-gray-700 text-lg">
            Have questions or need assistance? Reach out to us and we’ll respond
            as soon as possible.
          </p>

          <div className="space-y-3">
            <p className="text-gray-700">
              <span className="font-semibold">Email:</span>{' '}
              support@skillswap.com
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Phone:</span> +880 1234 567890
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Address:</span> 123 Main Street,
              Dhaka, Bangladesh
            </p>
          </div>
        </div>

        <div className="md:w-1/2">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              placeholder="Your Message"
              className="border border-gray-300 rounded px-3 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
