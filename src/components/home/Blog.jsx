"use client";
import React, { useEffect, useRef } from "react";
import style from "../../style/home/Blog.module.css";
import Image from "next/image";
import RightArrow from "../../../public/icon/arrow-right.svg";
import img from "../../../public/webp/sh5.webp";
import img2 from "../../../public/webp/img17.webp";
import img3 from "../../../public/webp/sh6.webp";
import img4 from "../../../public/webp/img19.webp";
import img5 from "../../../public/webp/img20.webp";
import img6 from "../../../public/webp/img15.webp";
import img7 from "../../../public/webp/img14.webp";
import img8 from "../../../public/webp/img13.webp";
import img9 from "../../../public/webp/sh4.webp";

import Link from "next/link";
const Blog = () => {
  const blogData = [
    {
      img: img,
      date: "April 22, 2024",
      min: "08 min Read",
      text: "The workplace tells and screams for more top story bloggers already be following",
    },
    {
      img: img2,
      date: "April 22, 2024",
      min: "08 min Read",
      text: "The workplace tells and screams for more top story bloggers already be following",
    },
    {
      img: img3,
      date: "April 22, 2024",
      min: "08 min Read",
      text: "The workplace tells and screams for more top story bloggers already be following",
    },
    {
      img: img4,
      date: "April 22, 2024",
      min: "08 min Read",
      text: "The workplace tells and screams for more top story bloggers already be following",
    },
    {
      img: img5,
      date: "April 22, 2024",
      min: "08 min Read",
      text: "The workplace tells and screams for more top story bloggers already be following",
    },
    {
      img: img6,
      date: "April 22, 2024",
      min: "08 min Read",
      text: "The workplace tells and screams for more top story bloggers already be following",
    },
    {
      img: img9,
      date: "April 22, 2024",
      min: "08 min Read",
      text: "The workplace tells and screams for more top story bloggers already be following",
    },
    {
      img: img7,
      date: "April 22, 2024",
      min: "08 min Read",
      text: "The workplace tells and screams for more top story bloggers already be following",
    },
    {
      img: img8,
      date: "April 22, 2024",
      min: "08 min Read",
      text: "The workplace tells and screams for more top story bloggers already be following",
    },
  ];

  const blogCardsRef = useRef(null);

  useEffect(() => {
    const scrollContainer = blogCardsRef.current;
    if (!scrollContainer) return;

    const cardWidth = scrollContainer.firstChild?.offsetWidth || 0;
    const scrollStep = cardWidth + 24;
    let scrollAmount = 0;

    const scrollInterval = setInterval(() => {
      if (scrollAmount + scrollStep >= scrollContainer.scrollWidth) {
        scrollAmount = 0;
        scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollAmount += scrollStep;
        scrollContainer.scrollBy({ left: scrollStep, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className={style.blogContainer}>
      <div className={style.BlogHeader}>
        <div className={style.blogheaderDetails}>
          <h1>News & Insights</h1>
          <p>
            Stay updated with Dubai real estate market trends, investment tips,
            and upcoming projects.
          </p>
        </div>
        <Link href="/blog" style={{ textDecoration: "none" }}>
        <button>
          Browse All Blog{" "}
          <Image src={RightArrow.src} alt="img" height={20} width={20} />
        </button>
        </Link>
      </div>

      <div className={style.BlogCards} ref={blogCardsRef}>
        {blogData?.map((item, i) => (
          <div className={style.bloCard} key={i}>
            <Image src={item?.img} alt="img" height={1000} width={1000} />
            <div className={style.blogContent}>
              <p>{item?.date}</p>
              <p>{item?.min}</p>
            </div>
            <p>{item?.text}</p>
            <Link href="/blog" style={{ textDecoration: "none" }}>
              <button>
                Read More
                <Image src={RightArrow.src} alt="img" height={30} width={30} />
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
