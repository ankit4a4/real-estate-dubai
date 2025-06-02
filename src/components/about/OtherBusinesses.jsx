"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "../../style/about/OtherBusinesses.module.css";
import Image from 'next/image';
import Slider from "react-slick";
import prevArrow from "../../../public/icon/arrow-left.svg";
import nextArrow from "../../../public/icon/arrow-right.svg";
import { useRef } from "react";

import img1 from "../../../public/other/img1.webp"
import img2 from "../../../public/other/img2.webp"
import img3 from "../../../public/other/new.webp"
import img4 from "../../../public/other/old.webp"
import img5 from "../../../public/other/registration-4519979_1280.webp"
import img6 from "../../../public/other/visa.webp"
import img7 from "../../../public/other/web.webp"


const OtherBusinesses = () => {

  const data = [
    {
      img: img2,
      title: "Corporate Service Provider",
    },
    {
      img: img3,
      title: "New trade license",
    },
    {
      img: img6,
      title: "Golden Visa Service",
    },
    {
      img: img1,
      title: "Business Bank Account Services",
    },
    {
      img: img5,
      title: " VAT Registration & Filing Services",
    },
    {
      img: img7,
      title: "Web Designing & Digital Marketing",
    },
   
    {
      img: img4,
      title: "Old trade license",
    },
  ];

  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: "60px",
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: <></>,
    nextArrow: <></>,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className={style.FeaturedAwards_container}>
      <h1>OUR OTHER BUSINESSES</h1>

      {/* Custom arrow buttons */}
      <div className={style.arrows}>
        <div
          className={style.arrowBtn}
          onClick={() => sliderRef.current.slickPrev()}
        >
          <Image src={prevArrow.src} alt="prev" height={50} width={50} />
        </div>
        <div
          className={style.arrowBtn}
          onClick={() => sliderRef.current.slickNext()}
        >
          <Image src={nextArrow.src} alt="next" height={50} width={50} />
        </div>
      </div>

      {/* Slider component */}
      <Slider {...settings} ref={sliderRef} className={style.slider}>
        {
          data.map((item, i) => (
            <div className={style.FeaturedAwards_card} key={i}>
              <div className={style.FeaturedAwards_cardImage}>
                <Image src={item.img} alt="img" height={1000} width={1000} />
              </div>
              <h2>{item.title}</h2>
            </div>
          ))
        }
      </Slider>
    </div>
  );
};

export default OtherBusinesses;
