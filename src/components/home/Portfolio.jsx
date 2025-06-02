"use client";
import React, { useEffect, useRef, useState } from "react";
import style from "../../style/home/Portfolio.module.css";
import Image from "next/image";
import img3 from "../../../public/icon/arrow-right.svg";
import shape from "../../../public/shape/section_shape_2_3.jpg";
import flor from "../../../public/webp/img26.webp";
import Link from "next/link";

const Portfolio = () => {
  const scrollRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const div = document.getElementById("card");
    if (div) {
      setCardWidth(div.scrollWidth + 50);
    }
  }, []);

  useEffect(() => {
    if (!cardWidth) return;
  
    const interval = setInterval(() => {
      if (scrollRef.current) {
        if (scrollRef.current.scrollLeft + scrollRef.current.clientWidth >= scrollRef.current.scrollWidth) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
        }
      }
    }, 3000);
  
    return () => clearInterval(interval);
  }, [cardWidth]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  const cardData = [
    {
      heading: "Downtown Dubai",
      text: "Iconic skyline views & luxury living.",
      img: "/webp/img1.webp",
    },
    {
      heading: "Dubai Marina",
      text: "Waterfront apartments with high rental yield.",
      img: "/webp/img2.webp",
    },
    {
      heading: "Palm Jumeirah",
      text: "Ultra-luxurious beachfront properties.",
      img: "/webp/img3.webp",
    },
    {
      heading: "Dubai Creek Harbour",
      text: "Smart investment with future-ready infrastructure.",
      img: "/webp/img4.webp",
    },
    {
      heading: "Business Bay",
      text: "Prime office and commercial spaces for investment.",
      img: "/webp/business.webp",
    },
  ];

  return (
    <div className={style.ProjectContainer}>
      <div className={style.jump}>
        <Image src={shape.src} alt="img" height={90} width={90} />
      </div>
      <div className={style.ProjectHeadingContainer}>
        <div className={style.ProjectHeadingBox}>
          <h1>Exclusive Properties in Dubai</h1>
          <p>
            Find the best ready-to-move-in and off-plan apartments, rentals, and
            commercial properties in Dubai&#39;s top areas:
          </p>
        </div>
        <div className={style.ProjectBtnBox}>
          <Link href="/properties" style={{ textDecoration: "none" }}>
            <button>
              Browse All Projects
              <Image
                className={style.img}
                src={img3.src}
                alt="img"
                height={70}
                width={70}
              />
            </button>
          </Link>
        </div>
      </div>
      <div className={style.allCardContainer}>
        <div className={style.leftArrow} onClick={scrollLeft}>
          <Image src={img3} height={100} width={100} alt="img" />
        </div>
        <div
          className={style.project_AllCards}
          ref={scrollRef}
          style={{ scrollBehavior: "smooth" }}
        >
          {cardData?.map((item, index) => (
            <div
              key={index}
              className={style.project_card}
              style={{ width: `${cardWidth}px` }}
              id="card"
            >
              <div
                className={style.project_card_Img}
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "100% 100%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Image src={flor} height={1000} width={1000} alt="image" />
              </div>
              <h1>{item.heading}</h1>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
