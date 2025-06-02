"use client";
import React, { useEffect, useRef, useState } from "react";
import style from "../../style/properties/SingleProperti.module.css";
import Slider from "react-slick";
import Image from "next/image";
import calender from "../../../public/icon/calendar.svg";
import icon1 from "../../../public/icon/property-single-icon1-1.svg";
import icon2 from "../../../public/icon/property-single-icon1-2.svg";
import icon3 from "../../../public/icon/property-single-icon1-3.svg";
import icon4 from "../../../public/icon/property-single-icon1-4.svg";
import icon5 from "../../../public/icon/property-single-icon1-5.svg";
import icon6 from "../../../public/icon/property-single-icon1-6.svg";
import icon7 from "../../../public/icon/property-single-icon1-7.svg";
import icon8 from "../../../public/icon/property-single-icon1-8.svg";
import icon9 from "../../../public/icon/property-single-icon1-9.svg";
import icon10 from "../../../public/icon/property-single-icon1-10.svg";
import Link from "next/link";
import { FaBookReader, FaPlay, FaSwimmingPool } from "react-icons/fa";
import {
  useGetAllPropertyQuery,
  useGetSinglePropertyQuery,
} from "@/store/Slices/PropertySlice";
import arrowLeft from "../../../public/icon/arrow-left.svg";
import arrowRight from "../../../public/icon/arrow-right.svg";
import logo from "../../../public/team/alsaba2.png";
import { useSetContactMutation } from "@/store/Slices/Contact";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SlCalender } from "react-icons/sl";
import { FaArrowUpFromGroundWater } from "react-icons/fa6";
import { MdTableRestaurant } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { SiRootsbedrock } from "react-icons/si";
import { PiSolarRoofDuotone } from "react-icons/pi";
import { PiMapPinSimpleAreaLight } from "react-icons/pi";
import { FaHotTub } from "react-icons/fa";
import { GrYoga } from "react-icons/gr";
import { RiFloodLine } from "react-icons/ri";
import { RiSofaLine } from "react-icons/ri";
const SingleProperte = (propertyId) => {
  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [queryParams, setQueryParams] = useState({
    category: "",
    search: "",
    emirates: "",
    buy: "",
    rent: "",
    maxPrice: "",
    page: 1,
    limit: 4,
  });
  const { data: allPropertyData } = useGetAllPropertyQuery({
    queryParams,
    page: 1,
    limit: 3,
  });

  const [
    setContact,
    {
      isLoading: isContactLoading,
      isSuccess: isContactSuccess,
      isError: isContactError,
      error: contactError,
    },
  ] = useSetContactMutation();

  const _id = propertyId?.propertyId;
  const id = _id?.id;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyId: "",
  });

  const { data, isLoading, isSuccess, isError } = useGetSinglePropertyQuery({
    id: _id?.id,
  });
  console.log("data of single property::::::", data);
  const handleScroll = (newIndex) => {
    setIndex(newIndex);
    if (itemRefs.current[newIndex]) {
      itemRefs.current[newIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };
  const sliderRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < data?.property?.images?.length) {
        setIndex(
          (prevIndex) => (prevIndex + 1) % data?.property?.images?.length
        );
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  /////////////////////////////////// Form Handle //////////////////////////////////////////////

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      propertyId: id,
    }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setContact(formData);
  };

  useEffect(() => {
    if (isContactSuccess) {
      toast.success("Your Comment Submitted");
      setFormData({
        name: "",
        email: "",
        phone: "",
        propertyId: "",
      });
    } else if (isContactError) {
      toast.error("Something went wrong");
    }
  });

  return (
    <section className={style.propertyPageSingle}>
      <ToastContainer />
      {/* ////////////////////////////////////////////////// */}
      <div className={style.heroHomeRightData}>
        <div
          key={index}
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className={style.rightSideAnimation}
        >
          <Image
            src={(data && data?.property?.images[index]?.url) || null}
            alt="hero"
            height={1000}
            width={1000}
          />
        </div>

        <div className={style.heroHomeRightDataSlider_container}>
          {/* Left Arrow */}
          <div
            className={style.heroHomeRightDataLeftArrow}
            onClick={() =>
              handleScroll(
                index > 0 ? index - 1 : data?.property?.images?.length - 1
              )
            }
          >
            <Image
              src={arrowLeft?.src || null}
              alt="Left"
              height={100}
              width={100}
            />
          </div>

          {/* Slider Box */}
          <div ref={sliderRef} className={style.heroHomeRightDataSlider}>
            {data &&
              data?.property?.images?.map((item, i) => (
                <div
                  key={i}
                  ref={(el) => (itemRefs.current[i] = el)}
                  className={style.heroHomeRightDataSlider_imageBox}
                  onClick={() => setIndex(i)}
                >
                  <Image
                    src={item?.url || null}
                    alt="Item"
                    height={1000}
                    width={1000}
                  />
                  {index === i && (
                    <div className={style.indexShowBox}>
                      <p>{i <= 9 ? "0" + (i + 1) : i + 1}</p>
                    </div>
                  )}
                </div>
              ))}
          </div>

          {/* Right Arrow */}
          <div
            className={style.heroHomeRightDataRightArrow}
            onClick={() =>
              handleScroll(
                index < data?.property?.images?.length - 1 ? index + 1 : 0
              )
            }
          >
            <Image
              src={arrowRight.src || null}
              alt="Right"
              height={100}
              width={100}
            />
          </div>
        </div>
      </div>

      {/* //////////////////////////////////////////////////////// */}
      <div className={style.customRow}>
        <div className={style.customColumn}>
          <div className={style.propertyPageSingle}>
            <div className="page-content">
              <div className={style.propertyMeta}>
                <p className={style.propertyTag} style={{ color: "white" }}>
                  {data?.property?.buy === true
                    ? "Buy"
                    : data?.property?.rent === true
                    ? "Rent"
                    : ""}
                </p>
                <p className={style.metaLink}>
                  <Image
                    src={calender || null}
                    alt="img"
                    height={25}
                    width={25}
                  />
                  {data?.property?.createdAt
                    ? new Date(data?.property?.createdAt).toLocaleDateString(
                        "en-GB",
                        { day: "2-digit", month: "short", year: "numeric" }
                      )
                    : ""}
                </p>

                
              </div>
              <p className={style.propertyPrice}>
                  <span style={{textDecoration: "line-through"}}>

                  {data?.property?.propertyPrice}
                  </span>

                  <span>{data?.property?.ourPrice}</span>
                </p>
              <h2 className={style.pageTitle}>About This Property</h2>
              <p>{data?.property?.description}</p>
              <h2 className={style.pageTitle}>Property Overview</h2>
              <ul className={style.propertyGridList}>
                {data?.property?.propertyType && (
                  <li>
                    <div className={style.propertyGridListIcon}>
                      <Image
                        src={icon1 || null}
                        alt="img"
                        height={25}
                        width={25}
                      />
                    </div>
                    <div>
                      <h4 className={style.propertyGridListTitle}>ID NO.</h4>
                      <p className={style.propertyGridListText}>
                        {data?.property?.idNo}
                      </p>
                    </div>
                  </li>
                )}
                {data?.property?.propertyType && (
                  <li>
                    <div className={style.propertyGridListIcon}>
                      <Image
                        src={icon2 || null}
                        alt="img"
                        height={25}
                        width={25}
                      />
                    </div>
                    <div>
                      <h4 className={style.propertyGridListTitle}>Type</h4>
                      <p className={style.propertyGridListText}>
                        {data?.property?.propertyType}
                      </p>
                    </div>
                  </li>
                )}
                {data?.property?.totalRoom && (
                  <li>
                    <div className={style.propertyGridListIcon}>
                      <Image
                        src={icon3 || null}
                        alt="img"
                        height={25}
                        width={25}
                      />
                    </div>
                    <div>
                      <h4 className={style.propertyGridListTitle}>Room</h4>
                      <p className={style.propertyGridListText}>
                        {data?.property?.totalRoom}
                      </p>
                    </div>
                  </li>
                )}
                {data?.property?.totalBedRoom && (
                  <li>
                    <div className={style.propertyGridListIcon}>
                      <Image
                        src={icon4 || null}
                        alt="img"
                        height={25}
                        width={25}
                      />
                    </div>
                    <div>
                      <h4 className={style.propertyGridListTitle}>Bedroom</h4>
                      <p className={style.propertyGridListText}>
                        {data?.property?.totalBedRoom}
                      </p>
                    </div>
                  </li>
                )}
                {data?.property?.totalBathRoom && (
                  <li>
                    <div className={style.propertyGridListIcon}>
                      <Image
                        src={icon5 || null}
                        alt="img"
                        height={25}
                        width={25}
                      />
                    </div>
                    <div>
                      <h4 className={style.propertyGridListTitle}>Bath</h4>
                      <p className={style.propertyGridListText}>
                        {data?.property?.totalBathRoom}
                      </p>
                    </div>
                  </li>
                )}

                {/* <li>
                  <div className={style.propertyGridListIcon}>
                    <Image
                      src={icon6 || null}
                      alt="img"
                      height={25}
                      width={25}
                    />
                  </div>
                  <div>
                    <h4 className={style.propertyGridListTitle}>Purpose</h4>
                    <p className={style.propertyGridListText}>Sale</p>
                  </div>
                </li> */}

                {data?.property?.sqft && (
                  <li>
                    <div className={style.propertyGridListIcon}>
                      <Image
                        src={icon7 || null}
                        alt="img"
                        height={25}
                        width={25}
                      />
                    </div>
                    <div>
                      <h4 className={style.propertyGridListTitle}>
                        Built up Area
                      </h4>
                      <p className={style.propertyGridListText}>
                        {data?.property?.sqft}
                      </p>
                    </div>
                  </li>
                )}
                {data?.property?.parking && (
                  <li>
                    <div className={style.propertyGridListIcon}>
                      <Image
                        src={icon8 || null}
                        alt="img"
                        height={25}
                        width={25}
                      />
                    </div>
                    <div>
                      <h4 className={style.propertyGridListTitle}>Parking</h4>
                      {/* <p className={style.propertyGridListText}>
                      {data?.property?.parking ? "yes" : "No"}
                    </p> */}
                    </div>
                  </li>
                )}
                {data?.property?.elevator && (
                  <li>
                    <div className={style.propertyGridListIcon}>
                      <Image
                        src={icon9 || null}
                        alt="img"
                        height={25}
                        width={25}
                      />
                    </div>
                    <div>
                      <h4 className={style.propertyGridListTitle}>Elevator</h4>
                      {/* <p className={style.propertyGridListText}>
                      {data?.property?.elevator ? "yes" : "No"}
                    </p> */}
                    </div>
                  </li>
                )}
                {data?.property?.wifi && (
                  <li>
                    <div className={style.propertyGridListIcon}>
                      <Image
                        src={icon10 || null}
                        alt="img"
                        height={25}
                        width={25}
                      />
                    </div>
                    <div>
                      <h4 className={style.propertyGridListTitle}>Wifi</h4>
                    </div>
                  </li>
                )}

                {data?.property?.backyard && (
                  <li>
                    <div className={style.propertyGridListIcon}>
                      <FaArrowUpFromGroundWater
                        style={{ color: "white" }}
                        size={23}
                      />
                    </div>
                    <div>
                      <h4 className={style.propertyGridListTitle}>Backyard</h4>
                    </div>
                  </li>
                )}

                {data?.property?.dinningRooms && (
                  <li>
                    <div className={style.propertyGridListIcon}>
                      <MdTableRestaurant style={{ color: "white" }} size={23} />
                    </div>
                    <div>
                      <h4 className={style.propertyGridListTitle}>
                        Dinning Rooms
                      </h4>
                      <p className={style.propertyGridListText}>
                        {data?.property?.dinningRooms}
                      </p>
                    </div>
                  </li>
                )}

                {data?.property?.gym && (
                  <li>
                    <div className={style.propertyGridListIcon}>
                      <CgGym style={{ color: "white" }} size={23} />
                    </div>
                    <div>
                      <h4 className={style.propertyGridListTitle}>Gym</h4>
                    </div>
                  </li>
                )}

                {data?.property?.lobby && (
                  <li>
                    <div className={style.propertyGridListIcon}>
                      <SiRootsbedrock style={{ color: "white" }} size={23} />
                    </div>
                    <div>
                      <h4 className={style.propertyGridListTitle}>Lobby</h4>
                    </div>
                  </li>
                )}

                {data?.property?.roofTopGarden && (
                  <li>
                    <div className={style.propertyGridListIcon}>
                      <PiSolarRoofDuotone
                        style={{ color: "white" }}
                        size={23}
                      />
                    </div>
                    <div>
                      <h4 className={style.propertyGridListTitle}>
                        Roof Top Garden
                      </h4>
                    </div>
                  </li>
                )}

                {data?.property?.roofTopArea && (
                  <li>
                    <div className={style.propertyGridListIcon}>
                      <PiMapPinSimpleAreaLight
                        style={{ color: "white" }}
                        size={23}
                      />
                    </div>
                    <div>
                      <h4 className={style.propertyGridListTitle}>
                        Roof Top Area
                      </h4>
                      <p className={style.propertyGridListText}>
                        {data?.property?.roofTopArea}
                      </p>
                    </div>
                  </li>
                )}

                {data?.property?.sauna && (
                  <li>
                    <div className={style.propertyGridListIcon}>
                      <FaHotTub style={{ color: "white" }} size={23} />
                    </div>
                    <div>
                      <h4 className={style.propertyGridListTitle}>Sauna</h4>
                    </div>
                  </li>
                )}

                {data?.property?.studyRoom && (
                  <li>
                    <div className={style.propertyGridListIcon}>
                      <FaBookReader style={{ color: "white" }} size={23} />
                    </div>
                    <div>
                      <h4 className={style.propertyGridListTitle}>
                        Study Room
                      </h4>
                      <p className={style.propertyGridListText}>
                        {data?.property?.studyRoom}
                      </p>
                    </div>
                  </li>
                )}

                {data?.property?.swimmingPool && (
                  <li>
                    <div className={style.propertyGridListIcon}>
                      <FaSwimmingPool style={{ color: "white" }} size={23} />
                    </div>
                    <div>
                      <h4 className={style.propertyGridListTitle}>
                        Swimming Pool
                      </h4>
                    </div>
                  </li>
                )}

                {data?.property?.yogaArea && (
                  <li>
                    <div className={style.propertyGridListIcon}>
                      <GrYoga style={{ color: "white" }} size={23} />
                    </div>
                    <div>
                      <h4 className={style.propertyGridListTitle}>Yoga Area</h4>
                    </div>
                  </li>
                )}

                {data?.property?.majlis && (
                  <li>
                    <div className={style.propertyGridListIcon}>
                      <RiFloodLine style={{ color: "white" }} size={23} />
                    </div>
                    <div>
                      <h4 className={style.propertyGridListTitle}>Majlis</h4>
                      <p className={style.propertyGridListText}>
                        {data?.property?.majlis}
                      </p>
                    </div>
                  </li>
                )}

                {data?.property?.noOfHalls && (
                  <li>
                    <div className={style.propertyGridListIcon}>
                      <RiSofaLine  style={{ color: "white" }} size={23} />
                    </div>
                    <div>
                      <h4 className={style.propertyGridListTitle}>
                        No Of Halls
                      </h4>
                      <p className={style.propertyGridListText}>
                        {data?.property?.noOfHalls}
                      </p>
                    </div>
                  </li>
                )}
              </ul>

              {/* gallery  */}
              <h3 className={style.galleryHeadding}>From Our Gallery</h3>
              <div className={style.galleryImgContainer}>
                {data &&
                  data?.property?.images?.map((item, index) => (
                    <div className={style.galleryImg} key={index}>
                      <Image
                        src={item?.url || null}
                        alt="Iceland landscape"
                        width={1000}
                        height={1000}
                      />
                    </div>
                  ))}
              </div>
              <h3 className={style.galleryHeadding}>Features & amenities</h3>
              <div className={style.featureContainer}>
                <ul>
                  {data?.property?.features?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <h3 className={style.galleryHeadding}>Location</h3>
              <div className={style.locationMap}>
                <div className={style.contactMap}>
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7310056272386!2d${data?.property?.longitude}!3d${data?.property?.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b97badc6151%3A0x30b048c9fb2129bc!2sAngfuztheme!5e0!3m2!1sen!2sbd!4v1651028958211!5m2!1sen!2sbd`}
                    loading="lazy"
                    title="Google Maps Location"
                  ></iframe>
                </div>
                <div className={style.mapAddress}>
                  <div className={style.thumb}>
                    <img
                      src="https://cdn.pixabay.com/photo/2013/11/27/09/49/iceland-219182_640.jpg"
                      alt="img"
                    />
                  </div>
                  <div className={style.mediaBody}>
                    <h4 className={style.title}>Address:</h4>
                    <p className={style.text}>{data?.property?.addressLine}</p>
                  </div>
                </div>
              </div>

              <div className={style.floorPlan}>
                <h3 className={style.pageTitle}>Floor Plan</h3>
                <ul className={style.propertyTab}>
                  {data &&
                    data?.property?.floorPlan?.map((item, i) => (
                      <li key={i}>
                        <button
                          style={{
                            background:
                              index2 === i ? "var(--theme-color)" : "",
                            color: index2 === i ? "#fff" : "",
                          }}
                          onClick={() => setIndex2(i)}
                        >
                          {item?.title}
                        </button>
                      </li>
                    ))}
                </ul>
              </div>
              <div className={style.tabContent}>
                <div className="tab-pane fade show active">
                  <div className={style.propertyPlan}>
                    <div className={style.propertyThumb}>
                      <Image
                        src={
                          (data &&
                            data?.property?.floorPlan[index2]?.floorImage
                              ?.url) ||
                          null
                        }
                        alt="img"
                        height={100}
                        width={100}
                      />
                    </div>
                    <div className={style.property_grid_details}>
                      <h4 className={style.gridTitle}>
                        {data?.property?.floorPlan[index2]?.title}
                      </h4>
                      <p className={style.gridText}>
                        {data?.property?.floorPlan[index2]?.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className={style.pageTitle}>Property Video</h3>
              <div className={style.videoBox}>
                <iframe
                  src={data && data?.property?.video?.url}
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
        <div className={style.customColTwo}>
          <aside className={style.sidebarArea}>
            <div className={style.widgetSearch}>
              <form className={style.searchForm} onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData?.name}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  value={formData?.email}
                  onChange={handleInputChange}
                />
                <input
                  type="number"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData?.phone}
                  onChange={handleInputChange}
                />
                <button type="submit">
                  {isContactLoading ? "Loading..." : "Reach To Us"}

                  <Image
                    src={arrowRight}
                    height={200}
                    width={200}
                    alt="image not found"
                  />
                </button>
              </form>
            </div>

            <div className={style.widgetSearch}>
              <h3 className={style.widgetTitle}>Recent Property</h3>
              {allPropertyData?.properties?.map((item, i) => (
                <div className={style.recentPost} key={i}>
                  <div className={style.mediaImg}>
                    <Link href="#">
                      <img src={item?.image} alt="Blog Image" />
                    </Link>
                  </div>
                  <div className={style.mediaBody}>
                    <h4 className={style.postTitle}>
                      <Link className={style.mediaLink} href="#">
                        {item?.title}
                      </Link>
                    </h4>
                    <div className={style.recentPostMeta}>
                      <p
                        style={{
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <SlCalender />
                        {item?.createdAt
                          ? new Date(item?.createdAt).toLocaleDateString(
                              "en-GB",
                              {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              }
                            )
                          : ""}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={style.blogBanner}>
              <div className={style.bannerContainer}>
                <h3 className={style.bannerTitle}>
                  Need Help? We Are Here To Help You
                </h3>
                <div className={style.bannerLogo}>
                  <Image src={logo} height={100} width={100} alt="img" />
                </div>
                <h4 className={style.bannerSubtitle}>You Get Online support</h4>
                <h5 className={style.bannerLink}>
                  <Link className={style.bannerCallLink} href="#">
                    +971-55-746-2021
                  </Link>
                </h5>
                <Link href="/contact" className={style.bannerBtn}>
                  Read More
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default SingleProperte;
