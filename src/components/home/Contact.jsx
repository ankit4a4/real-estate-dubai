import React from "react";
import style from "../../style/home/Contact.module.css";
import Image from "next/image";
import Link from "next/link";
import { SlLocationPin } from "react-icons/sl";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import img from "../../../public/webp/img3.webp"
const Contact = () => {
  return (
    <div className={style.contactSec}>
      <div className={style.contactArea}>
        <div className={style.contactForm}>
          <div className={style.contactFormContainer}>
            <div className={style.titleArea}>
              <h2 className={style.secTitle}>Get In Touch</h2>
              <p>
              we are committed to delivering top-tier real estate solutions tailored to your needs
              </p>
            </div>
            <div className={style.aboutContactGrid}>
              <div className={style.aboutContactIcon}>
                <span>
                  <SlLocationPin size={22} />
                </span>
              </div>
              <div className={style.aboutContactDetails}>
                <h6 className={style.aboutContactDetailsTitle}>Location:</h6>
                <p className={style.aboutContactDetailsText}>
                  P.O Box : 414 630 , office No 17, Floor 29th, Aspin Commercial Tower, Sheikh Zayed Road, Dubai - UAE
                </p>
                <p className={style.aboutContactDetailsText}>ns, LA 70130 </p>
              </div>
            </div>
            <div className={style.aboutContactGrid}>
              <div className={style.aboutContactIcon}>
                <FiPhoneCall size={20} />
              </div>
              <div className="about-contact-details">
                <h6 className={style.aboutContactDetailsTitle}>Phone:</h6>
                <p className={style.aboutContactDetailsText}>
                  <p className={style.link} >
                    +971-55-746-2021  
                  </p>
                </p>

                <p className={style.aboutContactDetailsText}>
                  <p className={style.link} >
                    +91-9717-032-021
                  </p>
                </p>
              </div>
            </div>
            <div className={style.aboutContactGrid}>
              <div className={style.aboutContactIcon}>
                <IoMailOutline size={22} />
              </div>
              <div >
                <h6 className={style.aboutContactDetailsTitle}>Email:</h6>
                <p className={style.aboutContactDetailsText}>
                  <p  className={style.link}>
                  mohammad@mshome.ae
                  </p>
                </p>

              </div>
            </div>
          </div>
        </div>

        <div className={style.locationMap}>
          <div className={style.contactMap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7310056272386!2d55.2724984!3d25.2089625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4289acafffff%3A0x7aa5042af4c182c2!2sMetro+Station!5e0!3m2!1sen!2sbd!4v1651028958211!5m2!1sen!2sbd"
              loading="lazy"
            ></iframe>

          </div>
          <div className={style.locationMapAddress}>
            <div className={style.thumb}>
              <Image
                src={img}
                alt="img"
                height={100}
                width={100}
              />
            </div>
            <div className={style.media_body}>
              <h4 className={style.title}>Address:</h4>
              <p className={style.text}>
                P.O Box : 414 630 , office No 17, Floor 29th, Aspin Commercial Tower, Sheikh Zayed Road, Dubai - UAE
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
