"use client";
import React, { useEffect, useState } from "react";
import style from "../../style/home/About.module.css";
import Image from "next/image";
import shape from "../../../public/shape/section_shape_2_1.jpg";
import checkmark from "../../../public/icon/checkmark.svg";
import phone from "../../../public/icon/phone.svg";
import arrowRight from "../../../public/icon/arrow-right.svg";
import img1 from "../../../public/webp/img27.webp"
import img2 from "../../../public/webp/img28.webp"
import img3 from "../../../public/webp/img14.webp"
import img4 from "../../../public/webp/img3.webp"
import img5 from "../../../public/webp/img4.webp"
import img6 from "../../../public/webp/dubai4.webp"
import img7 from "../../../public/webp/dubai5.webp"
import img8 from "../../../public/webp/cityscape.webp";

import Link from "next/link";

const About = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % aboutLeftData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const aboutLeftData = [
    "High ROI Investments",
    "Prime Locations Across Dubai",
    "Flexible Payment Plans",
    "Direct Deals with Top Developers",
  ];

  const img = [img1, img8, img6, img4, img7];

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % img.length);
  };
  return (
    <>
      <div className={style.About_container}>
        {/* /// --- about Left data --- ///  */}
        <div className={style.About_leftBox}>
          <h1>Your Trusted Partner in Dubai Real Estate</h1>
          <p>
            At Mohammad & Saba Real Estate LLC, we specialize in connecting
            investors and home buyers with the best properties in Dubai. Our
            curated selection includes ready-to-move-in apartments, off-plan
            investments, residential rentals, and commercial properties,
            ensuring seamless and profitable transactions.
          </p>

          <div className={style.leftBoxFlexBox}>
            <div className={style.leftBoxFlexBoxLeftBox}>
              {aboutLeftData.map((item, i) => (
                <p key={i}>
                  <Image
                    src={checkmark.src}
                    alt="img"
                    height={100}
                    width={100}
                  />
                  {item}
                </p>
              ))}
            </div>
            <div className={style.leftBoxFlexBoxRightBox}>
              <div className={style.PhoneDiv}>
                <Image
                  src={phone.src}
                  alt="img"
                  height={100}
                  width={100}
                ></Image>
              </div>
              <h5>Get in Touch</h5>
              <h4>+971-55-746-2021</h4>
              <h4>+91-9717-032-021</h4>
            </div>
          </div>

          <Link href="/about" style={{ textDecoration: "none" }}>
            <button className={style.About_leftBox_btn}>
              More About Us
              <Image src={arrowRight} alt="Icon" height={100} width={100} />
            </button>
          </Link>
        </div>

        {/* /// --- about Right data --- ///  */}
        <div className={style.About_RightBox}>
          <button onClick={handleNext}>
            <Image
              src={arrowRight.src}
              alt="img"
              height={100}
              width={100}
            ></Image>
          </button>

          <div className={style.imageContainer}>
            <Image
              src={img[index]}
              height={1000}
              width={1000}
              alt="image"
              className={`${style.fade} ${index === index ? style.active : style.hidden
                }`}
            />
            <Image
              src={img[(index + 1) % img.length]}
              height={1000}
              width={1000}
              alt="image"
              className={`${style.fade} ${index === index ? style.active : style.hidden
                }`}
            />
            <Image
              src={img[(index + 2) % img.length]}
              height={1000}
              width={1000}
              layout=""
              alt="image"
              className={`${style.fade} ${index === index ? style.active : style.hidden
                }`}
            />
          </div>

          <Image
            src={shape.src}
            alt="About"
            height={100}
            width={100}
            className={style.aboutRightBgImageAnimation}
          />
        </div>
      </div>
    </>
  );
};

export default About;
