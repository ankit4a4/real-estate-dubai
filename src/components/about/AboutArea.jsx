"use client";
import React, { useEffect } from "react";
import style from "../../style/about/AboutArea.module.css";
import shape from "../../../public/shape/section_shape_2_1.jpg";
import shape1 from "../../../public/shape/section_shape_2_3.jpg";
import { FaPlay } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";
import checkMark from "../../../public/icon/checkmark.svg";
import phone from "../../../public/icon/phone.svg";
import img3 from "../../../public/webp/burjkhalifa.webp";
import director from "../../../public/team/image2.jpg";
import vision from "../../../public/other/vision.webp"

import Image from "next/image";
const AboutArea = () => {
  useEffect(() => {
    const lettering = (element) => {
      const text = element.innerText;
      const letters = text.split("");
      element.innerHTML = "";
      letters.forEach((letter, index) => {
        const span = document.createElement("span");
        span.innerText = letter;
        span.style.animationDelay = `${index * 0.1}s`;
        element.appendChild(span);
      });
    };

    const element = document.querySelector("#circleAnime");
    if (element) {
      lettering(element);
    }
  }, []);

  return (
    <div className={style.About_container}>
      <div className={style.cardContainer}>
        <div
          className={style.textBox}
          style={{ width: "100%", textAlign: "center" }}
        >
          <h1 style={{ width: "100%", textAlign: "center" }}>
            Mohammad & Saba Real Estate LLC
          </h1>
          <p>
            we are committed to delivering top-tier real estate solutions
            tailored to your needs. With a strong foundation built on
            transparency, integrity, and client satisfaction , we specialize in
            a diverse range of properties, including ready-to-move-in
            apartments, off-plan investments, residential rentals, and
            commercial real estate across Dubai.
          </p>
        </div>
      </div>
      <div className={style.cardContainerImg}>
        <div className={style.textBoxImg}>
          <p>
            "WE ARE SHARPENING OUR STRATEGY TO BE ONE OF THE WORLD'S MOST
            VALUABLE, MOST INNOVATIVE AND MOST ADMIRED COMPANIES"
          </p>
          <p>Founder "MOHAMMAD SHAHBAZ"</p>

          <h1>FROM THE DESK OF FOUNDER <p></p></h1>
        </div>

        <div className={style.imageBoxI}>
          <Image
            src={director}
            width={1000}
            height={1000}
            alt="img"
            className={style.imageBoxImg}
          />
        </div>
      </div>
      <div className={style.cardContainer}>
        <div className={style.imageBox} style={{ background: "#545454" }}>
          <Image src={vision} width={1000} height={1000} alt="img" style={{objectFit:"cover"}}/>
        </div>
        <div className={style.textBox}>
          <h1>Our Vision & Mission</h1>
          <p>
            Our mission is to help investors, apartment owners, and businesses
            make informed real estate decisions while providing access to
            Dubai&#39;s most sought-after properties. We prioritize full
            transparency, expert consultation, and a client-first approach ,
            ensuring that every real estate journey is strategic, profitable,
            and hassle-free.{" "}
          </p>
        </div>
      </div>
      <div className={style.cardContainer2}>
        <div className={style.textBox}>
          <p>
            That&#39;s why we build every home like it&#39;s our own. Building
            locally since 1988, we hold ourselves to the highest standards of
            quality and construction integrity. In addition to the 28 required
            county inspections, we complete nine formal Inland inspections, plus
            nine more third-party critical inspections — that&#39;s 18
            additional formal inspections on every Inland Home, by choice. Our
            goal is that each home will serve your family, and others, for
            generations to come.
          </p>
          <div className={style.aboutWrap}>
            <div className={style.checklist}>
              <ul>
                <li>
                  <img src={checkMark.src} alt="img" />
                  Comprehensive Real Estate Solutions
                </li>
                <li>
                  <img src={checkMark.src} alt="img" />
                  100% Customer Satisfaction Guarantee
                </li>
                <li>
                  <img src={checkMark.src} alt="img" />
                  Highly Professional & Experienced Team
                </li>
                <li>
                  <img src={checkMark.src} alt="img" />
                  On-Time Project Delivery & Market Insights
                </li>
              </ul>
            </div>
            <div >
              <div className={style.callIcon}>
                <img src={phone.src} alt="img" />
              </div>
              <div >
                <h6 className={style.btnTitle}>Call Us 24/7</h6>
                <h5 className={style.btnText}>+971-55-746-2021 </h5>
                <h5 className={style.btnText}>+91-9717-032-021</h5>
              </div>
            </div>
          </div>
        </div>
        <div className={style.imageBox2}>
          <Image src={img3} width={1000} height={1000} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default AboutArea;
