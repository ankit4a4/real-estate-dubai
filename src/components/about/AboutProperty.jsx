import React from 'react'
import style from "../../style/about/AboutProperty.module.css"
import Image from 'next/image'
import uae from "../../../public/other/uae.webp"
import india from "../../../public/other/india.webp"
import ksa from "../../../public/other/kse.webp"
const AboutProperty = () => {
  return (
    <>
      <div className={style.AboutProperty_container}>
        {/* /////////////////////// left Data /////////////////////// */}
        <div className={style.AboutProperty_left}>
          <p>PROPERTIES <h4></h4></p>
          <h1>INTERNATIONAL DESTINATIONS</h1>
          <h5>Our properties each have their own unique design aesthetic, providing an aspirational lifestyle within a thriving community, supported by Mohammad & Saba team.</h5>
        </div>

        {/* /////////////////////// right Data /////////////////////// */}
        <div className={style.AboutProperty_right}>
          <div className={style.rightBoxLeftDiv}>
            <div className={style.rightBoxleftDiv_imageBox}>
              <Image src={uae} alt="img" height={1000} width={1000} />
              <p>
                UAE<h3></h3>
              </p>
            </div>
          </div>
          <div className={style.rightBoxRightDiv}>


            <div className={style.rightBoxleftDiv_imageBox2}>
              <Image src={ksa} alt="img" height={1000} width={1000} />


              <p>
                The Kingdom of Saudi Arabia <h3></h3>
              </p>
            </div>

            <div className={style.rightBoxleftDiv_imageBox2} >
              <Image src={india} alt="img" height={1000} width={1000} />
              <p>
                INDIA <h3></h3>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutProperty
