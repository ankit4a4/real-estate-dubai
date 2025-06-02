"use client";
import React, { useEffect, useState } from "react";
import style from "../../style/layout/Footer.module.css";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { PiCopyrightLight } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import logo from "../../../public/team/alsaba2.png";
import { useAddSubscribeMutation } from "@/store/Slices/Contact";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [sendSubscribe, { isLoading, isSuccess, isError }] =
    useAddSubscribeMutation();

  const handleSubmit = () => {
    sendSubscribe(email);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Subscribe successful");
    } else if (isError) {
      toast.error("Something is wrong.");
    }
  });
  return (
    <footer className={style.footerWrapper}>
      <ToastContainer />
      <div className={style.footerTop}>
        <div className={style.footerWrap}>
          <div className={style.newsletterWrap}>
            <h5 className={style.newsletterTitle}>
              Newsletter To Get Updated The Latest News
            </h5>
            <div className={style.newsletterForm}>
              <div className={style.formGroup}>
                <input
                  type="email"
                  required
                  className={style.formControl}
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button className={style.thBtn} onClick={handleSubmit}>
                {isLoading ? "subscribing..." : "Subscribe Now"}
              </button>
            </div>
          </div>
          <div className={style.widgetArea}>
            <div className={style.row}>
              <div className={style.rowDiv}>
                <div>
                  <Link href="/">
                    <Image src={logo} alt="ms-home" height={150} width={300} />
                  </Link>
                </div>
                <p className={style.aboutText}>
                  Your trusted real estate partner in Dubai.
                </p>
                <div className={style.thSocial}>
                  <Link
                    href="https://www.facebook.com/"
                    className={style.footerIcon}
                  >
                    <FaFacebookF size={17} />
                  </Link>
                  <Link href="https://www.x.com/" className={style.footerIcon}>
                    <BsTwitterX size={17} />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/"
                    className={style.footerIcon}
                  >
                    <FaLinkedinIn size={17} />
                  </Link>
                  <Link
                    href="https://www.youtube.com/"
                    className={style.footerIcon}
                  >
                    <FaYoutube size={17} />
                  </Link>
                  <Link
                    href="https://www.instagram.com/"
                    className={style.footerIcon}
                  >
                    <FaInstagram size={18} />
                  </Link>
                </div>
              </div>
              <div className={style.rowDivTwo}>
                <div className="widget footer-widget">
                  <h3 className={style.widgetTitle}>Get In Touch</h3>
                  <div className={style.widgetContact}>
                    <div className={style.infoBoxText}>
                      <div className={style.infoIcon}>
                        <SlLocationPin size={22} />
                      </div>
                      <div className={style.infoDetails}>
                        <p>
                          P.O Box : 414 630 , office No 17, Floor 29th, Aspin
                          Commercial Tower, Sheikh Zayed Road, Dubai - UAE
                        </p>
                      </div>
                    </div>
                    <div className={style.infoBoxText}>
                      <div className={style.infoIcon}>
                        <FiPhoneCall size={20} />
                      </div>
                      <div className={style.infoDetails}>
                        <p>+971-55-746-2021  </p>
                        <p>+91-9717-032-021</p>
                      </div>
                    </div>
                    <div className={style.infoBoxText}>
                      <div className={style.infoIcon}>
                        <IoMailOutline size={22} />
                      </div>
                      <div className={style.infoDetails}>
                        <p>mohammad@mshome.ae</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.rowDivTwo}>
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className={style.widgetTitle}>Useful Link</h3>
                  <div className="menu-all-pages-container">
                    <ul className={style.menu}>
                      <li>
                        <Link href="/properties" className={style.menuLink}>
                          Properties
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog" className={style.menuLink}>
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link href="/gallery" className={style.menuLink}>
                          Gallery
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={style.rowDivTwo}>
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className={style.widgetTitle}>Explore</h3>
                  <div className="menu-all-pages-container">
                    <ul className={style.menu}>
                      <li>
                        <Link href="/about" className={style.menuLink}>
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link href="/privacy-policy" className={style.menuLink}>
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/term-and-condition"
                          className={style.menuLink}
                        >
                          Terms and Conditions
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.copyrightWrap}>
        <div className={style.copywriteTextDiv}>
          <p className={style.copyrightText}>
            Copyright <PiCopyrightLight size={18} /> 2024
            <Link href="https://moveexa.in/" style={{textDecoration: "none", color:"#c2d6c2"}}>Moveexa</Link>, All rights
            reserved.
          </p>
        </div>
        <div className={style.copyWriteRightDiv}>
          <div className={style.footerLinks}>
            <ul>
              <li>
                <Link
                  href="/term-and-condition"
                  style={{ color: "var(--lite-white)", textDecoration: "none" }}
                >
                  Terms And Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  style={{ color: "var(--lite-white)", textDecoration: "none" }}
                >
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>
          <div className={style.thSocial2}>
            <Link
              href="https://www.facebook.com/"
              className={style.footerIcon2}
            >
              <FaFacebookF size={17} />
            </Link>
            <Link href="https://www.x.com/" className={style.footerIcon2}>
              <BsTwitterX size={17} />
            </Link>
            <Link
              href="https://www.linkedin.com/"
              className={style.footerIcon2}
            >
              <FaLinkedinIn size={17} />
            </Link>
            <Link href="https://www.youtube.com/" className={style.footerIcon2}>
              <FaYoutube size={17} />
            </Link>
            <Link
              href="https://www.instagram.com/"
              className={style.footerIcon2}
            >
              <FaInstagram size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
