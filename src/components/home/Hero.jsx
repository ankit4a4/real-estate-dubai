"use client";
import React, { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import style from "../../style/home/Hero.module.css";
import Image from "next/image";
import arrowRight from "../../../public/icon/arrow-right.svg";
import arrowLeft from "../../../public/icon/arrow-left.svg";
import shape from "../../../public/shape/section_shape_2_1.jpg";
import img1 from "../../../public/webp/img17.webp";
import img3 from "../../../public/webp/newImageDubai.webp";
import img4 from "../../../public/webp/img14.webp";
import img5 from "../../../public/webp/img10.webp";
import img6 from "../../../public/webp/cityscape.webp";
import Link from "next/link";
import director from "../../../public/team/image2.jpg"

import axios from "axios";
import api from "../../../package.json"
const Hero = () => {

  // this function for visitor count 
  const visitor = async () => {
    try {
      const response = await axios.post(`${api.baseUrl}/dashboard/incrementVisitorCount`)

    } catch (error) {
      console.log("Error in visitor api:", error)
    }
  }

  useEffect(() => {

    visitor()


  }, [])

  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);
  const itemRefs = useRef([]);
  const [rotation, setRotation] = useState(0);
  const handleScroll = (newIndex) => {
    if (newIndex >= itemRefs.current.length) {
      setIndex(0);
      if (sliderRef.current) {
        sliderRef.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      }
    } else {
      setIndex(newIndex);
    }

    // Execute scroll logic
    if (itemRefs.current[newIndex]) {
      const itemWidth = itemRefs.current[newIndex].offsetWidth + 16;

      if (sliderRef.current) {
        sliderRef.current.scrollBy({
          left: itemWidth,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleScroll(index + 1);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [index]);

  const Data = [
    {
      heading: "Luxury Living in the Heart of Dubai",
      des: "Experience world-class amenities, breathtaking views, and premium residences designed for comfort and elegance.",
      img: img1,
    },
    {
      heading: "Exclusive Waterfront Residences",
      des: "Wake up to stunning waterfront views and enjoy the serene lifestyle of Dubai’s most prestigious communities.",
      img: img3,
    },
    {
      heading: "Modern Architecture & Smart Living",
      des: "Discover properties featuring cutting-edge designs, smart home technology, and seamless luxury experiences.",
      img: img4,
    },
    {
      heading: "Prime Locations with Unmatched Connectivity",
      des: "Live in vibrant neighborhoods with easy access to business hubs, entertainment, and world-class infrastructure.",
      img: img5,
    },
  ];

  const homeFoterData = [
    { num: 20, det: "YEARS OF EXPERIENCES" },
    { num: 270, det: "PROJECTS" },
    { num: 85, det: "TEAM MEMBERS" },
    { num: 1200, det: "SATISFIED CLIENTS" },
  ];

  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    const inteval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360)
    }, 80)
    return () => clearInterval(inteval)
  }, [])

  const text = "Mohammad & Saba * Founder ";

  return (
    <>
      <div className={style.homeHeroContainer}>
        <div className={style.headerShape}>
          <Image
            src={shape}
            alt="img"
            height={150}
            width={150}
          />
        </div>
        {/* Left Data */}
        <div className={style.heroHomeLeftData}>

          <Image
            src={Data[index].img}
            alt="About"
            height={2000}
            width={2000}
            className={style.heroHomeLeftDataImg}
            layout=""
          />
        </div>

        {/* Right Data */}
        <div className={style.heroHomeRightData}>

          <motion.div
            key={index}
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className={style.rightSideAnimation}
          >
            <h1>{Data[index].heading}</h1>
            <p>{Data[index].des}</p>
            <Link href="/contact" style={{ textDecoration: "none" }}>
              <button>
                Request A Visit
                <Image
                  src={arrowRight.src}
                  alt="About"
                  height={100}
                  width={100}
                />
              </button>
            </Link>
          </motion.div>

          {/* circle animation  */}

          <div className={style.container}>
            <div className={style.rotatingContainer}>
              {/* Static text circle */}
              <div className={style.textCircle} style={{
                transform: `rotate(${rotation}deg)`,
                transition: 'transform 0.1s linear'
              }}>
                {text.split('').reverse().map((char, index) => {
                  // Calculate position for each character around the circle
                  const angle = index * (360 / text.length);

                  return (
                    <div
                      key={index}
                      className={style.characterWrapper}
                      style={{ transform: `rotate(${-angle}deg)` }}
                    >
                      <span
                        className={style.character}
                        style={{
                          // display: "inline-block",
                          transform: "rotate(0) ",
                        }}
                      >
                        {char}
                      </span>
                    </div>
                  );
                })}
              </div>



              {/* Center image */}
              <div className={style.centerImage}>
                <img
                  src={director.src}
                  alt="Center Image"
                />
              </div>
            </div>
          </div>

          <div className={style.heroHomeRightDataSlider_container}>
            {/* Left Arrow */}
            <div
              className={style.heroHomeRightDataLeftArrow}
              onClick={() =>
                handleScroll(index > 0 ? index - 1 : Data.length - 1)
              }
            >
              <Image src={arrowLeft} alt="Left" height={100} width={100} />
            </div>

            {/* Slider Box */}
            <div ref={sliderRef} className={style.heroHomeRightDataSlider}>
              {Data.map((item, i) => (
                <div
                  key={i}
                  ref={(el) => (itemRefs.current[i] = el)}
                  className={style.heroHomeRightDataSlider_imageBox}
                  onClick={() => setIndex(i)}
                >
                  <Image src={item.img} alt="Item" height={1000} width={1000} />
                  {index === i && (
                    <div className={style.indexShowBox}>
                      <p>{i <= 9 ? "0" + (i + 1) : i + 1}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <div
              className={style.heroHomeRightDataRightArrow}
              onClick={() =>
                handleScroll(index < Data.length - 1 ? index + 1 : 0)
              }
            >
              <Image src={arrowRight} alt="Right" height={100} width={100} />
            </div>
          </div>
        </div>
      </div>

      {/* Counter Area */}
      <div className={style.HomeFoterDesign} ref={ref}>
        <div className={style.waveAnim}></div>
        <div className={style.homeFoterDesign_shape}>
          <Image
            src={shape}
            alt="img"
            height={150}
            width={150}
          />
        </div>
        {homeFoterData.map((item, i) => (
          <div className={style.HomeFoterDesign_box} key={i}>
            <h1>
              {inView ? (
                <>
                  <CountUp
                    start={0}
                    end={item.num}
                    duration={2.5}
                    separator=","
                  />
                  +
                </>
              ) : (
                "0"
              )}
            </h1>
            <p>{item.det}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Hero;
