"use client";
import React, { useEffect, useState } from "react";
import style from "../../style/blog/SingleBlog.module.css";
import { IoIosSearch } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import Link from "next/link";
import { TbBuildingCommunity } from "react-icons/tb";
import { FaLink } from "react-icons/fa6";
import Image from "next/image";
import { CiUser } from "react-icons/ci";
import { GoClock, GoPencil } from "react-icons/go";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaUser } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import image from "./../../../public/icon/paper-plane.svg";
import {
  useGetAllBlogQuery,
  useGetBlogCommentsQuery,
  useGetSingleBlogQuery,
} from "@/store/Slices/Blog";
import logo from "../../../public/team/alsaba2.png";
import { useSetContactMutation } from "@/store/Slices/Contact";
import { toast } from "react-toastify";

const SingleBlog = (blogId) => {
  const { data, isSuccess, isError, isLoading } = useGetSingleBlogQuery({
    id: blogId?.blogId?.id,
  });
  const { data: allBlogData } = useGetAllBlogQuery({ page: 1 });
  const [
    setContact,
    {
      isLoading: isContactLoading,
      isSuccess: isContactSuccess,
      isError: isContactError,
      error: contactError,
    },
  ] = useSetContactMutation();
  const { data: commentData } = useGetBlogCommentsQuery({
    id: blogId?.blogId?.id,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    blogId: blogId?.blogId?.id,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContact(formData);
  };

  useEffect(() => {
    if (isContactSuccess) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        blogId: blogId?.blogId?.id,
      });
      toast.success("Your Comment Submitted");
    } else if (isContactError) {
      toast.error(contactError?.data?.message);
    }
  });

  const currentUrl = window.location.href;

  return (
    <section className={style.singleBlogContainer}>
      {isSuccess && (
        <div>
          <div className={style.blogContent}>
            <div className={style.customColFirst}>
              <div className={style.blogSingle}>
                <div className={style.blogImg}>
                  <Image
                    src={data && data?.blog?.image?.url}
                    alt="Blog Image"
                    height={100}
                    width={100}
                    className={style.blogImage}
                  />
                </div>
                <div className={style.blogContentTwo}>
                  <div className={style.blogMeta}>
                    <Link href="/" className={style.metaLink}>
                      <GoClock size={17} />
                      {data?.blog?.createdAt
                        ? new Date(data?.blog?.createdAt).toLocaleDateString(
                            "en-GB",
                            { day: "2-digit", month: "short", year: "numeric" }
                          )
                        : ""}
                    </Link>
                  </div>
                  <h2 className={style.blogTitle}>
                    {data && data?.blog?.title}
                  </h2>
                  <p className={style.blogText}>
                    {data && data?.blog?.subtitle}
                  </p>

                  <blockquote className={style.quote}>
                    <p>{data && data?.blog?.blogMessage}</p>
                  </blockquote>

                  {isSuccess && data?.blog?.subHeading && data?.blog?.subHeading?.map((item, index) => (
                    <div key={index}>
                      <h2 className={style.blogTitle}>{item?.subheading}</h2>
                      <p className={style.blogText}>
                        {item?.subHeadingDescription}
                      </p>
                      <div className={style.blogImg}>
                        <Image
                          src={item?.subHeadingImage?.url}
                          alt="img"
                          className={style.blogImage}
                          height={100}
                          width={100}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={style.shareLinks}>
                <div className={style.shareDiv}>
                  <div className={style.shareContent}></div>
                  <div className={style.shareContent}>
                    <span className={style.shareTitle}>Share:</span>
                    <div className={style.thSocial}>
                      <Link
                        className={style.thLink}
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                          currentUrl
                        )}`}
                        target="_blank"
                      >
                        <FaFacebookF size={15} className={style.thLink} />
                      </Link>
                      <Link
                        className={style.thLink}
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                          currentUrl
                        )}`}
                        target="_blank"
                      >
                        <BsTwitterX size={15} className={style.thLink} />
                      </Link>
                      <Link
                        className={style.thLink}
                        href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
                          currentUrl
                        )}`}
                        target="_blank"
                      >
                        <FaYoutube size={15} className={style.thLink} />
                      </Link>
                      <Link
                        className={style.thLink}
                        href={`https://www.instagram.com/?url=${encodeURIComponent(
                          currentUrl
                        )}`}
                        target="_blank"
                      >
                        <FaInstagram size={15} className={style.thLink} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className={style.thCommentsWrap}>
                <h3 className={style.blogInnerTitle}>
                  Comments (
                  {commentData?.comments?.length === 0
                    ? "1"
                    : commentData?.comments?.length === 1
                    ? "2"
                    : "3"}
                  )
                </h3>
                <ul className={style.commentList}>
                  {/* <li className={style.thCommentItem}>
                  <div className={style.thPostComment}>

                    <div className={style.commentContent}>
                      <h3 className={style.name}>Adam Jhon</h3>
                      <span className={style.commentedOn}>
                        25Jan, 2024 08:56pm
                      </span>
                      <p className={style.text}>
                        Through this blog, we aim to inspire readers to embrace
                        education as a lifelong journey and to advocate for
                        quality education
                      </p>

                    </div>
                  </div>
                  <ul className={style.children}>
                    <li className={style.thCommentItem}>
                      <div className={style.thPostComment}>

                        <div className={style.commentContent}>
                          <h3 className={style.name}>Jhon Abraham</h3>
                          <span className={style.commentedOn}>
                            27Jan, 2024 09:00pm
                          </span>
                          <p className={style.text}>
                            Education News and Trends: We provide updates on the
                            latest developments and trends in the education
                            sector.
                          </p>

                        </div>
                      </div>
                    </li>
                  </ul>
                </li> */}

                  {commentData?.comments?.slice(0, 3)?.map((item, i) => (
                    <li className={style.thCommentItem} key={i}>
                      <div className={style.thPostComment}>
                        <div className={style.commentContent}>
                          <h3 className={style.name}>{item?.fullName}</h3>
                          <span className={style.commentedOn}>
                            {new Date(item?.createdAt).toLocaleDateString(
                              "en-GB",
                              {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              }
                            )}
                            {", "}
                            {new Date(item?.createdAt).toLocaleTimeString(
                              "en-US",
                              {
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: true,
                              }
                            )}
                          </span>
                          <p className={style.text}>{item?.comment}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={style.thForm}>
                <div className={style.formTitle}>
                  <h3 className={style.innerTitle}>Leave a Reply</h3>
                  <p className={style.formText}>
                    Your email address will not be published. Required fields
                    are marked
                  </p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className={style.formContent}>
                    <div className={style.commonInput}>
                      <FaUser className={style.commonInputIcon} />
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name*"
                        className={style.formControl}
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className={style.commonInput}>
                      <IoMailOutline className={style.commonInputIcon} />
                      <input
                        type="text"
                        name="email"
                        placeholder="Your Email*"
                        className={style.formControl}
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className={style.commonInputTwo}>
                      <CiPhone className={style.commonInputIcon} />
                      <input
                        type="number"
                        name="phone"
                        placeholder="Phone*"
                        className={style.formControl}
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className={style.commonInputTwo}>
                      <GoPencil className={style.commonInputIcon} />
                      <textarea
                        name="message"
                        placeholder="Comment*"
                        className={style.formControl}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>

                    <div className={style.formGroup}>
                      <label htmlFor="reviewcheck">
                        Save my name, email, and phone number in this browser
                        for the next time I comment.
                        <span className="checkmark"></span>
                      </label>
                    </div>

                    <div className={style.formButton}>
                      <button type="submit">
                        {isContactLoading ? "Loading..." : "Submit Message "}

                        <span className="btn-icon">
                          <img src={image.src} alt="img" />
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* right side  */}
            <div className={style.customColTwo}>
              <aside className={style.sidebarArea}>
                <div className={style.widgetSearch}>
                  <h3 className={style.widgetTitle}>Recent Posts</h3>

                  {allBlogData?.allBlogs?.slice(1, 4).map((item, i) => (
                    <div className={style.recentPost}>
                      <div className={style.mediaImg}>
                        <FaLink className={style.imgLink} />
                        <Link href="blog-details.html">
                          <img src={item?.image?.url} alt="Blog Image" />
                        </Link>
                      </div>
                      <div className={style.mediaBody}>
                        <h4 className={style.postTitle}>
                          <p className={style.mediaLink}>{item?.title}</p>
                        </h4>
                        <div className={style.recentPostMeta}>
                          <p className={style.metaLink2}>
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
                    <h4 className={style.bannerSubtitle}>
                      You Get Online support
                    </h4>
                    <h5 className={style.bannerLink}>
                      <p
                        className={style.bannerCallLink}
                        href="tel:+971 557462021"
                      >
                        +971-55-746-2021
                      </p>
                    </h5>
                    <p className={style.bannerBtn}>Read More</p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SingleBlog;
