import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Home.css";

const Home = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error("Failed to load skills:", err));
  }, []);

  return (
    <div className="home-page max-w-7xl mx-auto p-6 mt-20">
      {/* Carousel Section */}
      <h2 className="text-3xl font-bold mb-6">Featured Skills</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {skills.slice(0, 6).map((skill) => ( // Carousel e only first 6 skills
          <SwiperSlide key={skill.skillId}>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">
              <img
                src={skill.image}
                alt={skill.skillName}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">{skill.skillName}</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Provider: {skill.providerName}
                </p>
                <p className="text-gray-700 mb-2">{skill.description}</p>
                <p className="text-gray-800 font-semibold">Price: ${skill.price}</p>
                <p className="text-yellow-500 font-semibold">
                  Rating: {skill.rating} ⭐
                </p>
                <p className="text-gray-500 text-sm">
                  Slots Available: {skill.slotsAvailable}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Grid Cards Section */}
      <h2 className="text-3xl font-bold mt-12 mb-6">All Skills</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill.skillId}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={skill.image}
              alt={skill.skillName}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">{skill.skillName}</h3>
              <p className="text-gray-600 text-sm mb-2">
                Provider: {skill.providerName}
              </p>
              <p className="text-gray-700 mb-2">{skill.description}</p>
              <p className="text-gray-800 font-semibold">Price: ${skill.price}</p>
              <p className="text-yellow-500 font-semibold">
                Rating: {skill.rating} ⭐
              </p>
              <p className="text-gray-500 text-sm">
                Slots Available: {skill.slotsAvailable}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
