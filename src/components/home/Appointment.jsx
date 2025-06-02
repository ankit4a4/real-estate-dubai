"use client";
import React, { useEffect, useState } from "react";
import style from "../../style/home/Appointment.module.css";
import Image from "next/image";
import paperPlan from "../../../public/icon/paper-plane.svg";
import img from "../../../public/webp/img16.webp";
import { useSetContactMutation } from "@/store/Slices/Contact";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Appointment = () => {

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
    <div className={style.appointmentContainer}>
      <ToastContainer />
      <div className={style.firstDiv}>
        <Image src={img} alt="img" height={1000} width={1000} />
      </div>
      <div className={style.secDiv}>
        <div className={style.titleArea}>
          <h2>Book Business Solutions</h2>
        </div>
        <form onSubmit={handleSubmit} className="appointment-form ajax-contact me-xl-5">
          <div className={style.formInputContainer}>
            <div className={style.formInput}>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Your Name*"
                value={formData.name}
                onChange={handleInputChange}
                required
              />

            </div>
            <div className={style.formInput}>
              <input
                type="email"
                name="email"
                placeholder="Your Email*"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className={style.formInput2}>
            <input
              type="number"
              name="phone"
              placeholder="Phone No*"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={style.selectContainer}>
            <select
              name="subject"

              value={formData.subject}
              onChange={handleInputChange}
              required
            >
              <option  disabled >
                Select Service Type
              </option>
              <option value="Off Plan">Off Plan</option>
              <option value="Ready To Move">Ready To Move</option>
              <option value="Need a Payment Plan">Need a Payment Plan</option>
            </select>
          </div>
          <div className={style.textArea}>
            <textarea
              name="message"
              placeholder="Type Your Message"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button className={style.submitBtn} type="submit">
            {
              isLoading ? "Sending..." : "Submit Message"
            }
            <span className="btn-icon">
              <Image src={paperPlan.src} alt="img" height={50} width={50} />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
