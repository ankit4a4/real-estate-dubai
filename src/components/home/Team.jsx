"use client";
import React, { useEffect, useRef } from "react";
import style from "../../style/home/Team.module.css";
import Link from "next/link";
import Image from "next/image";
import phone from "../../../public/icon/phone.svg";
import shape from "../../../public/shape/section_shape_2_1.jpg";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import leftArrow from "../../../public/icon/arrow-left.svg";
import rightArrow from "../../../public/icon/arrow-right.svg";
import img1 from "../../../public/team/image1.jpg";
import img2 from "../../../public/team/image2.jpg";
import image3 from "../../../public/team/image3.jpg";
import img4 from "../../../public/team/image4.jpg";
import img5 from "../../../public/team/image5.jpg";

const Team = () => {
  const teamContainerRef = useRef(null);

  const scrollLeft = () => {
    if (teamContainerRef.current) {
      const cardWidth =
        teamContainerRef.current.querySelector(`.${style.teamCard}`)
          ?.offsetWidth || 200;
      teamContainerRef.current.scrollBy({
        left: -(cardWidth + 32),
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (teamContainerRef.current) {
      const cardWidth =
        teamContainerRef.current.querySelector(`.${style.teamCard}`)?.offsetWidth || 200;

      // Check if the scroll position is at the end
      if (
        teamContainerRef.current.scrollLeft + teamContainerRef.current.clientWidth >=
        teamContainerRef.current.scrollWidth
      ) {
        // Reset scroll position to the start
        teamContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        // Scroll by cardWidth + 32 (gap between cards)
        teamContainerRef.current.scrollBy({
          left: cardWidth + 32,
          behavior: "smooth",
        });
      }
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const data = [
    { name: "Jamal Imam", det: "Area Sales Manager", img: image3 },
    { name: "Shaffi Qureshi", det: "Sales & Development Manager", img: img5 },
    { name: "Yousuf Irfan", det: "Sales Manger", img: img4 },
    { name: "Masood Huasain", det: "Sales & Marketing Manager", img: img1 },
  ];

  return (
    <div className={style.TeamContainer}>
      <div className={style.jump}></div>
      <div className={style.spin}>
        <Image src={shape} alt="img" height={200} width={200} />
      </div>
      <div className={style.TeamHeadingContainer}>
        <div className={style.TeamHeadingBox}>
          <h1>Meet The Awesome Team</h1>
          <p>
            We are a real estate firm with over 20 years of expertise, and our
            main goal is to provide amazing locations to our partners and
            clients.
          </p>
        </div>
        <div className={style.TeamBtnBox}>
          {/* <button>View All Team
            <Image className={style.img} src={img3} alt="img" height={500} width={500} />
          </button> */}
        </div>
      </div>
      <div className={style.teamContainerBox}>
        <div className={style.leftArrow} onClick={scrollLeft}>
          <Image src={leftArrow} height={50} width={50} alt="Left Arrow" />
        </div>
        <div className={style.right} onClick={scrollRight}>
          <Image src={rightArrow} height={50} width={50} alt="Right Arrow" />
        </div>
        <div className={style.TeamAllCardContainer} ref={teamContainerRef}>
          {data?.map((item, i) => (
            <div key={i} className={style.teamCard}>
              <div className={style.cardImage}>
                <Image src={item?.img} alt="img" height={1000} width={1000} />

                {/* <div className={style.iconWraper}>
                  <div className={style.iconBox}>
                    <p className={style.link}>
                      <FaFacebookF size={19} className={style.iconColor} />
                    </p>
                    <p className={style.link}>
                      <FaLinkedinIn size={19} className={style.iconColor} />
                    </p>
                    <p className={style.link}>
                      <FaYoutube size={19} className={style.iconColor} />
                    </p>
                    <p className={style.link}>
                      <FaInstagram size={19} className={style.iconColor} />
                    </p>
                    <p className={style.link}>
                      <BsTwitterX size={19} className={style.iconColor} />
                    </p>
                  </div>
                </div> */}
              </div>

              <div className={style.teamDetails}>
                <div className={style.teamDetailsLeftBox}>
                  <h1>{item?.name}</h1>
                  <p>{item?.det}</p>
                </div>
                {/* <div className={style.PhoneDiv}>
                  <Image src={phone} alt="img" height={50} width={50} />
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
