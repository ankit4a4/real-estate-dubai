"use client";
import React, { useEffect, useState } from "react";
import homeStyle from "../../style/home/Service.module.css";
import aboutStyle from "../../style/about/Service.module.css";
import Image from "next/image";
import shape3 from "../../../public/shape/section_shape_2_3.jpg";
import arrowRight from "../../../public/icon/arrow-right.svg";
import shape1 from "../../../public/shape/section_shape_2_1.jpg";
import { BiSupport } from "react-icons/bi";

const Service = (data) => {
  const [style, setStyle] = useState(homeStyle);
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);
  

  useEffect(() => {
    if (pathname === "/about") {
      setStyle(aboutStyle);
    } else {
      setStyle(homeStyle);
    }
  }, [pathname]);

  return (
    <>
      <div
        className={style.ServiceContainer}
        style={{ background: `var(${data.data.bg})` }}
      >
        {/* /// --- animation --- /// */}

        <div className={style.waveAnim}></div>

        {/* jumping animation  */}
        <div className={style.jump}>
          <Image src={shape3.src} alt="img" height={100} width={100} />
        </div>
        {/* jumping animation  */}

        <div className={style.galleryShape2}>
          <Image src={shape1.src} alt="img" height={100} width={100} />
        </div>

        <div className={style.serviceHeadingContainer}>
          <div className={style.serviceHeadingBox}>
            <h1 style={{ color: data.data.color }}>{data.data.title}</h1>
            <p>{data.data.description}</p>
          </div>
          {/* <div className={style.serviceBtnBox}>
            <button>
              {data.data.btn}
              <Image src={arrowRight} alt="Icon" height={100} width={100} />
            </button>
          </div> */}
        </div>

        <div className={style.serviceAllCards}>
          {data?.data?.cardData?.map((item, i) => (
            <div className={style.serviceCard} key={i}>
              <div className={style.cardCircle}>
                <Image src={item?.img} alt="Icon" height={100} width={100} />
              </div>
              <h2>{item.title}</h2>
              <p>{item.des}</p>

              <div className={style.cardImageBox}>
                <Image src={item?.img2} alt="img" height={1000} width={1000} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;
