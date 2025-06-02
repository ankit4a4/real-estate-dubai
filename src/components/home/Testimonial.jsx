"use client";
import React, { useEffect, useRef } from "react";
import style from "../../style/home/Testimonial.module.css";
import Image from "next/image";
import { TiStarFullOutline } from "react-icons/ti";
import shape1 from "../../../public/shape/section_shape_2_1.jpg";
import shape2 from "../../../public/shape/section_shape_2_3.jpg";
import arrowLeft from "../../../public/icon/arrow-left.svg";
import arrowRight from "../../../public/icon/arrow-right.svg";
import quote from "../../../public/icon/qoute2.svg";
import img from "../../../public/webp/img24.webp";
const Testimonial = () => {
  const scrollContainerRef = useRef(null);

  const handleNextClick = () => {
    if (scrollContainerRef.current) {
      const scrollAmount =
        scrollContainerRef.current.querySelector(`.${style.testiWrap2}`).offsetWidth + 64; // 4rem = 64px

      if (
        scrollContainerRef.current.scrollLeft + scrollContainerRef.current.clientWidth >=
        scrollContainerRef.current.scrollWidth
      ) {
        scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollContainerRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevClick = () => {
    if (scrollContainerRef.current) {
      const scrollAmount =
        scrollContainerRef.current.querySelector(`.${style.testiWrap2}`)
          .offsetWidth + 64; // 4rem = 64px
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      }); // Negative value for left scroll
    }
  };

  const testimonials = [
    {
      img: img,
      text: "Their expert advice and access to exclusive properties made my investment journey seamless. Highly recommended!",
      name: "Andrew Simon",
      expert: "Property Investor",
    },
    {
      img: img,
      text: "Their expert advice and access to exclusive properties made my investment journey seamless. Highly recommended!",
      name: "Andrew Simon",
      expert: "Property Investor",
    },
    {
      img: img,
      text: "Their expert advice and access to exclusive properties made my investment journey seamless. Highly recommended!",
      name: "Andrew Simon",
      expert: "Property Investor",
    },
    {
      img: img,
      text: "Their expert advice and access to exclusive properties made my investment journey seamless. Highly recommended!",
      name: "Andrew Simon",
      expert: "Property Investor",
    },
    {
      img: img,
      text: "Their expert advice and access to exclusive properties made my investment journey seamless. Highly recommended!",
      name: "Andrew Simon",
      expert: "Property Investor",
    },
  ];

  return (
    <section className={style.testimonial}>
      <div className={style.testimonialContainer}>
        <div className={style.spinAni}>
          <Image src={shape1} alt="img" height={100} width={100} />
        </div>
        <div className={style.jump}>
          <Image src={shape2} alt="img" height={100} width={100} />
        </div>
        <div className={style.customRow}>
          <div className={style.customColumn}>
            <div className={style.titleArea}>
              <h2 className={style.secTitle}>What Our Clients Say</h2>
              <p className={style.secText}>
                Investing in a property with MOHAMMAD & SABA was the best
                decision. The process was smooth, and my ROI is exceeding
                expectations.- John Doe, Investor
              </p>
            </div>
          </div>
          <div>
            <div className={style.secBtn}>
              <button onClick={handlePrevClick} className={style.sliderPrev}>
                <Image src={arrowLeft.src} alt="arrow" height={50} width={25} />
              </button>
              <button onClick={handleNextClick} className={style.sliderNext}>
                <Image
                  src={arrowRight.src}
                  alt="arrow"
                  height={50}
                  width={25}
                />
              </button>
            </div>
          </div>
        </div>
        <div className={style.container_fluid} ref={scrollContainerRef}>
          {testimonials.map((item, i) => (
            <div className={style.testiWrap2} key={i}>
              <div className={style.testGridWrap2}>
                <div className={style.testiGridThumb}>
                  <Image
                    src={item.img}
                    className={style.testimonialImg}
                    alt="img"
                    height={1000}
                    width={1000}
                  />
                </div>
                <div className={style.style2}>
                  <div className={style.testiGridReview}>
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                  </div>
                  <p className={style.testiCardText}>"{item.text}"</p>
                  <div className={style.testiCardProfile}>
                    <div className={style.quoteIcon}>
                      <Image
                        src={quote.src}
                        alt="icon"
                        height={100}
                        width={100}
                      />
                    </div>
                    <div className={style.avatar}>
                      <Image
                        src={item.img}
                        alt="avatar"
                        height={100}
                        width={100}
                      />
                    </div>
                    <div className={style.testiCardProfile_details}>
                      <h3 className={style.testiCardName}>{item.name}</h3>
                      <span className={style.testiCardDesig}>
                        {item.expert}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
