import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
        About Us
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <img
            src="https://i.ibb.co/7J5zwqwT/Ym-Ew-OGQ5-My5qc-Gc.jpg"
            alt="About Us"
            className="w-full h-80 md:h-96 object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <p className="text-gray-700 text-lg">
            Welcome to SkillSwap! We are dedicated to connecting learners with
            top-quality instructors across a variety of fields including
            technology, design, health, and more.
          </p>
          <p className="text-gray-700 text-lg">
            Our mission is to empower people to learn new skills, advance their
            careers, and achieve personal growth through accessible and engaging
            courses.
          </p>
          <p className="text-gray-700 text-lg">
            We believe in providing an excellent learning experience with
            detailed course content, interactive sessions, and a community of
            learners to support you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
