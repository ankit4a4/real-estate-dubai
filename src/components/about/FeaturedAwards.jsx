"use client"
import React, { useRef } from 'react'
import style from "../../style/about/FeaturedAwards.module.css"
import Image from 'next/image'
import img from "../../../public/webp/img10.webp"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import prevArrow from "../../../public/icon/arrow-left.svg";
import nextArrow from "../../../public/icon/arrow-right.svg";

///////////////
const FeaturedAwards = () => {

    const data = [
        {
            img: img,
            title: "Lorem ipsum dolor sit amet.",
            description: "Lorem, ipsum dolor.",
            year: "2024"
        },
        {
            img: img,
            title: "Lorem ipsum dolor sit amet.",
            description: "Lorem, ipsum dolor.",
            year: "2024"
        },
        {
            img: img,
            title: "Lorem ipsum dolor sit amet.",
            description: "Lorem, ipsum dolor.",
            year: "2024"
        },
        {
            img: img,
            title: "Lorem ipsum dolor sit amet.",
            description: "Lorem, ipsum dolor.",
            year: "2024"
        },
        {
            img: img,
            title: "Lorem ipsum dolor sit amet.",
            description: "Lorem, ipsum dolor.",
            year: "2024"
        },
        {
            img: img,
            title: "Lorem ipsum dolor sit amet.",
            description: "Lorem, ipsum dolor.",
            year: "2024"
        },
        {
            img: img,
            title: "Lorem ipsum dolor sit amet.",
            description: "Lorem, ipsum dolor.",
            year: "2024"
        },
        {
            img: img,
            title: "Lorem ipsum dolor sit amet.",
            description: "Lorem, ipsum dolor.",
            year: "2024"
        },
        {
            img: img,
            title: "Lorem ipsum dolor sit amet.",
            description: "Lorem, ipsum dolor.",
            year: "2024"
        },
        {
            img: img,
            title: "Lorem ipsum dolor sit amet.",
            description: "Lorem, ipsum dolor.",
            year: "2024"
        },
        {
            img: img,
            title: "Lorem ipsum dolor sit amet.",
            description: "Lorem, ipsum dolor.",
            year: "2024"
        },
        {
            img: img,
            title: "Lorem ipsum dolor sit amet.",
            description: "Lorem, ipsum dolor.",
            year: "2024"
        },
        {
            img: img,
            title: "Lorem ipsum dolor sit amet.",
            description: "Lorem, ipsum dolor.",
            year: "2024"
        },
        {
            img: img,
            title: "Lorem ipsum dolor sit amet.",
            description: "Lorem, ipsum dolor.",
            year: "2024"
        },
        {
            img: img,
            title: "Lorem ipsum dolor sit amet.",
            description: "Lorem, ipsum dolor.",
            year: "2024"
        },
        {
            img: img,
            title: "Lorem ipsum dolor sit amet.",
            description: "Lorem, ipsum dolor.",
            year: "2024"
        },
        {
            img: img,
            title: "Lorem ipsum dolor sit amet.",
            description: "Lorem, ipsum dolor.",
            year: "2024"
        },
        {
            img: img,
            title: "Lorem ipsum dolor sit amet.",
            description: "Lorem, ipsum dolor.",
            year: "2024"
        },
        {
            img: img,
            title: "Lorem ipsum dolor sit amet.",
            description: "Lorem, ipsum dolor.",
            year: "2024"
        },
    ]
    const sliderRef = useRef(null);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        centerPadding: "60px",
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: <></>,
        nextArrow: <></>,
        responsive: [
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 },
                
            },
        ],
    };


    return (
        <>
            <div className={style.FeaturedAwards_container}>
                <h1>AWARDS  AND CERTIFICATE</h1>
                <div className={style.arrows}>
                    <div
                        className={style.arrowBtn}
                        onClick={() => sliderRef.current.slickPrev()}
                    >
                        <Image src={prevArrow.src} alt="prev" height={50} width={50} />
                    </div>
                    <div
                        className={style.arrowBtn}
                        onClick={() => sliderRef.current.slickNext()}
                    >
                        <Image src={nextArrow.src} alt="next" height={50} width={50} />
                    </div>
                </div>
                <Slider {...settings} className={style.slider} ref={sliderRef}>
                    {
                        data.map((item, i) => (
                            <div className={style.FeaturedAwards_card} key={i}>
                                <div className={style.FeaturedAwards_cardImage}>
                                    <Image src={item.img} alt="img" height={1000} width={1000} />
                                </div>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                                <p>{item.year}</p>
                            </div>
                        ))
                    }
                </Slider>

            </div>
        </>
    )
}

export default FeaturedAwards
