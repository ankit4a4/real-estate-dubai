"use client"
import React from 'react'
import style from "../../style/about/Hero.module.css"
import { GoArrowRight } from "react-icons/go";
import Link from 'next/link';
import { useRouter } from "next/navigation";

const Hero = ({ data }) => {
  const router = useRouter();
  console.log("router", router.query);
  const { category } = router.query || {};  

  console.log("category::::::", category);
  return (
    <div className={style.aboutContainer} >

      <div className={style.aboutContent}>
        <div className={style.aboutInfo}>
            <h1 className={style.breadcumbTitle}>{data.title}</h1>
            <ul className={style.breadcumbMenu}>
              <li><Link href="/" style={{ textDecoration: "none" }}>Home</Link></li>
              <GoArrowRight size={22} className={style.icon} />
              <li>{data.page}</li>
            </ul>
          </div>
        </div>

    </div>
  )
}

export default Hero