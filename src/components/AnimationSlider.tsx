'use client'

import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

 const clientList = [
  {
    num: "1",
    width: 60,
    img: "/assets/slider/10x-Genomics.png",
    title: "Adaarsh",
  },
  {
    num: "2",
    width: 60,
    img: "/assets/slider/amazon-web-services-2 1.png",
    title: "Anmeda",
  },
  {
    num: "3",
    width: 60,
    img: "/assets/slider/homemainlogo.png",
    title: "Aristo",
  },
  {
    num: "4",
    width: 60,
    img: "/assets/slider/Logo-2.png",
    title: "Axplora",
  },
  {
    num: "5",
    width: 60,
    img: "/assets/slider/Logo-3.png",
    title: "Calyx",
  },
  {
    num: "6",
    width: 60,
    img: "/assets/slider/microsoft 1.png",
    title: "Deys",
  },
  {
    num: "7",
    width: 60,
    img: "/assets/slider/path2.png",
    title: "EAR India",
  },
  {
    num: "8",
    width: 60,
    img: "/assets/slider/teknopoint.png",
    title: "Gansons",
  }
];

const AnimationSlider = () => {
    const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    cssEase: "linear",
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          speed: 4000
        },
      },
    ],
  };

  return (
    <div className="w-full overflow-hidden py-4 bg-[#0A0914]">
      <Slider {...settings}>
        {clientList.map((client, index) => (
          <div key={index} className="px-4">
            <Image
              src={client.img}
              alt={client.title}
              title={client.title}
              className="w-full h-10 object-contain"
              width={50}
              height={100}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};


export default AnimationSlider;
