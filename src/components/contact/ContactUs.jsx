"use client"
import React, { useEffect, useState } from 'react'
import style from ".././../style/contact/Contact.module.css"
import Link from 'next/link';
import { SlLocationPin } from "react-icons/sl";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import shape from "../../../public/shape/section_shape_2_1.jpg"
import Image from 'next/image';
import { CiUser } from "react-icons/ci";
import { FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { PiChatsCircleBold } from "react-icons/pi";
import paperPlan from "../../../public/icon/paper-plane.svg"
import { useSetContactMutation } from '@/store/Slices/Contact';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img from "../../../public/webp/img3.webp"


const ContactUs = () => {
  const [setContact, { isLoading, isSuccess, isError }] = useSetContactMutation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setContact(formData)
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success('Your form submitted');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } else if (isError) {
      toast.error("Your form not submitted")
    }
  }, [isSuccess, isError]);
  return (
    <>
      <ToastContainer />
      <div className={style.contactFirstDiv}>
        <div className="container">
          <div className={style.contactTitle}>
            <span className={style.subTitle}>Get In Touch</span>
            <h2 className={style.secTitleHeadding}>Our Contact Information</h2>
          </div>
          <div className={style.contactSec}>
            <div className={style.commonDiv}>
              <div className={style.aboutContactGrid}>
                <div className={style.aboutContactIcon}>
                  <SlLocationPin size={22} />
                </div>
                <div className="about-contact-details">
                  <h6 className={style.contactTile}>Office Address</h6>
                  <p className={style.conatactText}>P.O Box : 414 630 , office No 17, Floor 29th, Aspin Commercial Tower, Sheikh Zayed Road, Dubai - UAE</p>
                </div>
              </div>
            </div>
            <div className={style.commonDiv}>

              <div className={style.aboutContactGrid}>

                <div className={style.aboutContactIcon}>

                  <FiPhoneCall size={22} />
                </div>
                <div className="about-contact-details">
                  <h6 className={style.contactTile}>Phone Numbers</h6>
                  <p className={style.conatactText}>+971-55-746-2021  </p>
                  <p className={style.conatactText}>+91-9717-032-021</p>
                </div>
              </div>
            </div>
            <div className={style.commonDiv}>
              <div className={style.aboutContactGrid}>
                <div className={style.aboutContactIcon}>
                  <IoMailOutline size={22} />
                </div>
                <div className="about-contact-details">
                  <h6 className={style.contactTile}>Email Us</h6>
                  <p className={style.conatactText}><p>mohammad@mshome.ae</p></p>
                  <p className={style.conatactText}>&nbsp;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.contactSecondDiv}>
        <div className={style.spinAni}>
          <Image src={shape.src} alt="img" height={100} width={100} />
        </div>
        <div className={style.cotactContainer}>
          <div className={style.contactContainerTwo}>
            <div className={style.appointmentWrap}>
              <h2 className={style.formTitle}>Schedule a visit</h2>
              <form onSubmit={handleSubmit} className="appointment-form ajax-contact">
                <div className="row">
                  <div className={style.formGroup1}>
                    <input
                      type="text"
                      className={style.formControl}
                      name="name"
                      placeholder="Your Name*"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                    <CiUser size={20} className={style.icon} />
                  </div>
                  <div className={style.formGroup1}>
                    <input
                      type="email"
                      className={style.formControl}
                      name="email"
                      placeholder="Your Email*"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    <FaRegEnvelope size={19} className={style.icon} />
                  </div>
                  <div className={style.formGroup1}>
                    <input
                      type="number"
                      className={style.formControl}
                      name="phone"
                      placeholder="Phone No.*"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                    <FaPhoneAlt size={19} className={style.icon} />
                  </div>

                  <div className={style.formGroup1}>
                    <select
                      name="subject"
                      className={style.formSelect}
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    >
                      <option disabled >
                        Select Service Type
                      </option>
                      <option value="Off Plan">Off Plan</option>
                      <option value="Ready To Move">Ready To Move</option>
                      <option value="Need a Payment Plan">Need a Payment Plan</option>
                    </select>
                    <IoIosArrowDown className={style.selectDownArrow} />
                  </div>
{/* //add  */}
                  <div className={style.formGroup1}>
                    <PiChatsCircleBold className={style.chatIcon} />
                    <textarea
                      name="message"
                      placeholder="Type Your Message"
                      className={style.formTextArea}
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  <div className={style.formBtn}>
                    <button className={style.thBtn} type="submit">
                      Submit Message <span className="btn-icon"><img src={paperPlan.src} alt="img" /></span>
                    </button>
                  </div>
                </div>
                <p className="form-messages mb-0 mt-3"></p>
              </form>
            </div>
          </div>
        </div>

        <div className={style.conatactMapSetion}>
          <div className={style.contactmap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7310056272386!2d55.2724984!3d25.2089625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4289acafffff%3A0x7aa5042af4c182c2!2sMetro+Station!5e0!3m2!1sen!2sbd!4v1651028958211!5m2!1sen!2sbd"
              loading="lazy"
            ></iframe>

          </div>
          <div className={style.contactInfo}>
            <div className={style.thumb}>
              <img src={img.src} alt="img" />
            </div>
            <div className={style.mediaBody}>
              <h4 className={style.title}>Address:</h4>
              <p className={style.text}>
                P.O Box : 414 630 , office No 17, Floor 29th, Aspin Commercial Tower, Sheikh Zayed Road, Dubai - UAE
              </p>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs;
