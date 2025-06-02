"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import style from "../../style/layout/Header.module.css";
import arrow from "../../../public/icon/arrow-right.svg";
import { IoReorderThreeOutline } from "react-icons/io5";
import { TiDeleteOutline } from "react-icons/ti";
import img from "../../../public/team/alsaba2.png";
import { useRouter } from "next/navigation";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import WhatsappIcon from "./WhatsappIcon";
const Header = () => {
  const [show, setShow] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();
  const pathname =
    typeof window !== "undefined" ? window?.location?.pathname : "";

  useEffect(() => {
    setShow(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const dropDown = ["Off Plan", "Ready To Move"];

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      router.push(`/properties/${selectedValue}`);
    }
  };

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  return (
    <header
      className={`${style.headerLayout} ${isSticky ? style.sticky : ""}`}
      style={{
        backgroundColor: "var(--gray-color)",
      }}
    >

      <WhatsappIcon />
      <div className={style.stickyWrapper}>
        <div className={style.menuArea}>
          <div className={style.firstDiv}>
            <div className={style.headerLogo}>
              <Link href="/">
                <Image height={100} width={190} src={img} alt="ms home" />
              </Link>
            </div>

            <nav className={style.mainMenu}>
              <ul>
                <li className="menu-item-has-children">
                  <Link href="/" style={{ textDecoration: "none" }}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" style={{ textDecoration: "none" }}>
                    About Us
                  </Link>
                </li>
                <li className={style.property}>
                  <div className={style.propertyDropdown_header}>
                    <span>Properties</span>
                    <MdOutlineKeyboardArrowDown />
                  </div>
                  <div className={style.dropdownMenu}>
                    {dropDown.map((item, index) => (
                      <Link
                        key={index}
                        href={`/properties?category=${item}`}
                        style={{ textDecoration: "none" }}
                        className={style.dropdownContent}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </li>
                <li>
                  <Link href="/blog" style={{ textDecoration: "none" }}>
                    Blog
                  </Link>
                </li>
                <li className="menu-item-has-children">
                  <Link href="/gallery" style={{ textDecoration: "none" }}>
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/contact" style={{ textDecoration: "none" }}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>

            <div className={style.headerButton}>
              <Link
                href="/contact"
                className={style.reqButton}
                style={{ textDecoration: "none" }}
              >
                Request A Visit
                <Image
                  src={arrow.src}
                  alt="arrow"
                  height={20}
                  width={30}
                  className={style.headerArrow}
                />
              </Link>
              <span className={style.MobileView} onClick={() => setShow(true)}>
                <IoReorderThreeOutline />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* /////////////////////////////////// mobile view Nav ////////////////////////////////////// */}

      {show && (
        <div className={style.mobileViewContainer}>
          <div
            className={style.mobileView_leftBox}
            style={{ left: show ? "0" : "-100%" }}
          >
            {/* Logo Box */}
            <div className={style.mobileView_Logo}>
              <Link href="/">
                <Image height={100} width={100} src={img} alt="Realar" />
              </Link>
              <span onClick={() => setShow(!show)}>
                <TiDeleteOutline />
              </span>
            </div>

            {/* Nav Link Box */}
            <div className={style.mobileView_Link}>
              <ul>
                <li className="menu-item-has-children">
                  <Link href="/" style={{ textDecoration: "none" }}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" style={{ textDecoration: "none" }}>
                    About Us
                  </Link>
                </li>
                <li>
                  <div onClick={toggleDropdown} className={style.ToggleButton}>
                    <span>Properties</span>
                    <MdOutlineKeyboardArrowDown />
                  </div>
                  {showDropdown && (
                    <div className={style.dropdownContentMobile}>
                      {dropDown.map((item, index) => (
                        <Link
                          key={index}
                          href={`/properties?category=${item}`}
                          style={{ textDecoration: "none" }}
                          className={style.dropdownItem}
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
                <li>
                  <Link href="/blog" style={{ textDecoration: "none" }}>
                    Blog
                  </Link>
                </li>
                <li className="menu-item-has-children">
                  <Link href="/gallery" style={{ textDecoration: "none" }}>
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/contact" style={{ textDecoration: "none" }}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
