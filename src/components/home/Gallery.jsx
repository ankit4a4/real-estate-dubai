import React from "react";
import style from "../../style/home/Gallery.module.css";
import Link from "next/link";
import Image from "next/image";
import shape1 from "../../../public/shape/section_shape_2_1.jpg";
import { GoPlus } from "react-icons/go";
import shape3 from "../../../public/shape/section_shape_2_3.jpg";
import rightArrow from "../../../public/icon/arrow-right.svg";
import img from "../../../public/webp/img9.webp";
import img2 from "../../../public/webp/img7.webp";
import img3 from "../../../public/webp/img8.webp";
import img4 from "../../../public/webp/sh1.webp";
import img5 from "../../../public/webp/sh2.webp";
import img6 from "../../../public/webp/sh3.webp";

const Gallery = () => {
  return (
    <div className={style.galleryContainer}>
      <div className={style.gallery}>
        <div className={style.galleryShape1}>
          <Image src={shape1.src} alt="img" height={130} width={130} />
        </div>
        <div className={style.waveAnim}></div>
        <div className={style.jump}>
          <Image src={shape3.src} alt="img" height={100} width={100} />
        </div>
        <div
          className={style.waveAnim2}
        ></div>
        <div className={style.galleryShape2}>
          <Image src={shape1.src} alt="img" height={100} width={100} />
        </div>

        <div className={style.galleryWrap1}>
          <div className={style.galleryWrap}>
            <div className={style.subDiv}>
              <div className={style.galleryContent}>
                <h2 className={style.secTitle}>
                  Why Invest in Dubai Real Estate?
                </h2>
                <div className={style.galleryText}>
                  <Link href="/contact" className={style.galleryBtn}>
                    Get In Touch
                    <Image src={rightArrow.src} height={100} width={100} alt="img" />
                  </Link>
                </div>
              </div>
            </div>
            <div className={style.firstImgDiv}>
              <ul className={style.galleryList1}>
                <li className={style.galleryCard}>
                  <p
                    className={style.popupImage}
                  >
                    <Image src={img} alt="img" height={1000} width={1000} />

                    <div className={style.absoluteBox}>
                      <h4>High ROI & Rental Yields</h4>
                      <p>Dubai offers some of the highest rental yields globally, with returns ranging between *5% to 10%*, making it attractive for investors.</p>
                    </div>
                  </p>
                </li>
                <li className={style.galleryCard}>
                  <p
                    className={style.popupImage}
                    
                  >
                    <Image src={img2} alt="img" height={1000} width={1000} />
                    <div className={style.absoluteBox}>
                      <h4>Tax-Free Investment</h4>
                      <p>No property tax or capital gains tax makes real estate investment in Dubai more profitable compared to many other global cities.</p>
                    </div>
                  </p>
                </li>
                <li className={style.galleryCard}>
                  <p
                    className={style.popupImage}
                    
                  >
                    <Image src={img3} alt="img" height={1000} width={1000} />
                    <div className={style.absoluteBox}>
                      <h4>Booming Economy & Infrastructure</h4>
                      <p>Dubai continues to grow with world-class infrastructure, strong tourism, and government-backed initiatives like *Dubai Economic Agenda (D33)*, ensuring long-term investment value.</p>
                    </div>
                  </p>
                </li>
              </ul>
            </div>
            <div className={style.secoundDiv}>
              <ul className={style.galleryList2}>
                <li className={style.galleryCard}>
                  <p
                    className={style.popupImage}
                    
                  >
                    <Image src={img4} alt="img" height={1000} width={1000} />
                    <div className={style.absoluteBox}>
                      <h4>Golden Visa & Residency Benefits</h4>
                      <p>Investors can qualify for long-term *Golden Visas (5-10 years)*, making Dubai a great place to live and do business. </p>
                    </div>
                  </p>
                </li>
                <li className={style.galleryCard}>
                  <p
                    className={style.popupImage}
                    
                  >
                    <Image src={img5} alt="img" height={1000} width={1000} />
                    <div className={style.absoluteBox}>
                      <h4>Freehold Property Ownership</h4>
                      <p>Foreign investors can own properties in *designated freehold areas*, providing full ownership rights and capital appreciation benefits.</p>
                    </div>
                  </p>
                </li>
                <li className={style.galleryCard}>
                  <p
                    className={style.popupImage}
                    
                  >
                    <Image src={img6} alt="img" height={1000} width={1000} />
                    <div className={style.absoluteBox}>
                      <h4>Safe & Business-Friendly Environment</h4>
                      <p>Dubai is one of the *safest cities globally*, with strong governance, political stability, and business-friendly policies that encourage foreign investments.</p>
                    </div>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
