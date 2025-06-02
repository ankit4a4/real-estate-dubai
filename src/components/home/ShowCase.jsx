"use client";
import React, { useEffect, useRef } from "react";
import style from "../../style/home/ShowCase.module.css";
import shape1 from "../../../public/shape/section_shape_2_1.jpg";
import { FaInstagram } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import img from "../../../public/webp/img16.webp";
import img2 from "../../../public/webp/img17.webp";
import img3 from "../../../public/webp/img18.webp";
import img4 from "../../../public/webp/img19.webp";
import img5 from "../../../public/webp/img20.webp";
import img6 from "../../../public/webp/img15.webp";
import img7 from "../../../public/webp/img14.webp";
import img8 from "../../../public/webp/img13.webp";
import img9 from "../../../public/webp/img1.webp";
import img10 from "../../../public/webp/img19.webp";

const ShowCase = () => {
  const sliderRef = useRef(null);
  const itemRef = useRef(null);

  const instagram = [
    img,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    const item = itemRef.current;

    if (slider && item) {
      const itemWidth = item.offsetWidth;
      const scrollAmount = itemWidth + 16;

      const interval = setInterval(() => {
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
          slider.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }, 3000);

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className={style.showCaseSec}>
      <div className={style.spin}>
        <Image src={shape1} alt="img" height={120} width={120} />
      </div>
      <div className="container-fluid">
        <div
          className={style.slider}
          ref={sliderRef}
          style={{ overflowX: "auto", whiteSpace: "nowrap" }}
        >
          {instagram.map((item, i) => (
            <div
              className="col-auto swiper-slide"
key={i}
            >
              <div className={style.instaBox}
                key={i}
                ref={i === 0 ? itemRef : null}
                style={{ display: "inline-block" }}>
                <Image src={item} alt="Instagram" height={500} width={500} />
                <Link
                  target="_blank"
                  href="https://instagram.com/"
                  className={style.iconBtn}
                >
                  <FaInstagram size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
