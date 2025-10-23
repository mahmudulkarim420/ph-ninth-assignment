import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Carousel.css';

const Carousel = () => {
  return (
    <div>
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
  );
};

export default Carousel;