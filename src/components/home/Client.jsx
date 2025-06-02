"use client";
import React from 'react';
import style from "../../style/home/Client.module.css";
import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';

const Client = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 6 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 5 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 0,
        settings: { slidesToShow: 2 },
      },
    ],
  };



  return (
    <div className={style.clientSrea}>
      <Slider {...settings}>
        {/* You can now map the images */}
        {Array(12).fill(null).map((_, index) => (
          <div className={style.clientCard} key={index} >
            <Image
              src="https://cdn.pixabay.com/photo/2025/01/31/09/52/dj-9372007_640.jpg"
              alt="Image"
              height={150}
              width={154}
            />
            <h4>Realer Property</h4>
            <p>Living Solution</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Client;




//////////////


<div className={style.clientCard}>
  <Image
    src="https://cdn.pixabay.com/photo/2025/01/31/09/52/dj-9372007_640.jpg"
    alt="Image"
    height={150}
    width={154}
  />
  <h4>Realer Property</h4>
  <p>Living Solution</p>
</div>