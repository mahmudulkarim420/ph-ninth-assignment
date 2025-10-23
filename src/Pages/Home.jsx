import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Home.css';

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
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={0}
          slidesPerView={1}
        >
          {[
            'https://i.ibb.co/7J5zwqwT/Ym-Ew-OGQ5-My5qc-Gc.jpg',
            'https://i.ibb.co/3m5c7jcb/MA.jpg',
            'https://i.ibb.co/W4gD2yjj/c3MuanBn.jpg',
            'https://i.ibb.co/xK8ZkWbL/UlVJPQ.jpg',
            'https://i.ibb.co/LhgBBGzR/LnBuZw.png',
            'https://i.ibb.co/WpK0V9XV/OSZzc2w9-MQ.jpg',
            'https://i.ibb.co/jv78HbC1/JnE9NzA.jpg',
            'https://i.ibb.co/XxLZYhFS/LWNvc-Hkuan-Bn.jpg',
            'https://i.ibb.co/ks88LqGk/Nz-Bf-Vj-Ff-X18uc-G5n.jpg',
            'https://i.ibb.co/0yMXxsym/a-W5n-Lmpw-Zw.jpg',
            'https://i.ibb.co/tpbbYpkv/cy5wbmc.png',
            'https://i.ibb.co/d4w6Gd7M/c-Gh5-LTE0-Nz-Quan-Bn.jpg',
          ].map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 🌿 All Skills Section */}
      <div className="home-page max-w-6xl mx-auto p-6 mt-20">
        <h2 className="text-3xl font-bold mb-6 text-center">All Skills</h2>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.skillId}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={skill.image}
                alt={skill.skillName}
                className="w-full h-70 object-cover"
              />
              <div className="p-4">
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
                <p className="text-gray-500 text-sm">
                  Slots Available: {skill.slotsAvailable}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
