import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-[1200px] w-full mx-auto rounded-xl overflow-hidden ">
      <Slider {...settings}>
        <div>
          <img
            src="https://i.ibb.co/jv78HbC1/JnE9NzA.jpg"
            alt="Banner 1"
            className="w-full h-[30vh] sm:h-[60vh] xs:h-[70vh] object-cover"
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co/W4gD2yjj/c3MuanBn.jpg"
            alt="Banner 2"
            className="w-full h-[30vh] sm:h-[60vh] xs:h-[70vh] object-cover"
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co/xK8ZkWbL/UlVJPQ.jpg"
            alt="Banner 3"
            className="w-full h-[30vh] sm:h-[60vh] xs:h-[90vh] object-cover"
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co/7J5zwqwT/Ym-Ew-OGQ5-My5qc-Gc.jpg"
            alt="Banner 4"
            className="w-full h-[30vh] sm:h-[60vh] xs:h-[90vh] object-cover"
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co/LhgBBGzR/LnBuZw.png"
            alt="Banner 5"
            className="w-full h-[30vh] sm:h-[60vh] xs:h-[90vh] object-cover"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
