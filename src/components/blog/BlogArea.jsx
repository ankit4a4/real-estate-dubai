"use client"
import React, { useEffect, useState } from "react";
import style from "../../style/blog/BlogArea.module.css";
import Link from "next/link";
import Image from "next/image";
import { CiUser } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { TbBuildingCommunity } from "react-icons/tb";
import { FaLink } from "react-icons/fa6";
import { useGetAllBlogQuery } from "@/store/Slices/Blog";
import { useRouter } from "next/navigation";
import logo from "../../../public/team/alsaba2.png"
import { FaArrowLeft } from "react-icons/fa";

const BlogArea = () => {
  const router = useRouter()
  const [page, setPage] = useState(1)
  const { data, isLoading, isSuccess, isError } = useGetAllBlogQuery(page)

  useEffect(() => {
    window.scrollTo({ top: 400, left: 0, behavior: 'smooth' });
  }, [page]);


  const handleSingleBlog = (id) => {
    router.push(`/blog/${id}`)
  }

  console.log("blog data ,:::::::::::::::: ", data)
  return (
    <section className={style.blogContainer}>
      <div className={style.blogContent}>
        <div className={style.customColFirst}>

          {isSuccess && data?.allBlogs?.map((item, index) => (
            <div className={style.blogSingle} key={index}>
              <div className={style.blogImg} onClick={() => handleSingleBlog(item?._id)}>

                <Image
                  className={style.blogMainImg}
                  src={item?.image?.url || null}
                  alt="Blog Image"
                  height={500}
                  width={250}
                />
              </div>
              <div className={style.blogInfo}>
                <div className={style.blogMeta}>

                  <p className={style.metaLink}>
                    <GoClock size={17} />

                    {item?.createdAt ? new Date(item?.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : ''}

                  </p>

                </div>
                <h2 className={style.blogTitle}>
                  <p className={style.blogTitleLink} >
                    {item?.title}
                  </p>
                </h2>
                <p className={style.blogText}>
                  {item?.subtitle}
                </p>
                <button onClick={() => handleSingleBlog(item?._id)} className={style.redBtn}>
                  Read More
                </button>
              </div>
            </div>
          ))}
          <div className={style.blogSingle}>
            <div className={style.blogAudio}>
              {/* <iframe
                title="Tell Me U Luv Me (with Trippie Redd) by Juice WRLD"
                src="https://w.soundcloud.com/player/?visual=true&amp;url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F830279092&amp;show_artwork=true&amp;maxwidth=751&amp;maxheight=1000&amp;dnt=1"
              ></iframe> */}
            </div>
            <div className={style.blogInfo}>
              <div className={style.blogMeta}>

                <p className={style.metaLink} >
                  <GoClock size={17} />
                  12 June, 2024
                </p>

              </div>
              <h2 className={style.blogTitle}>
                <p className={style.blogTitleLink} >
                  Discover unparalleled expertise in market
                </p>
              </h2>
              <p className={style.blogText}>
                Take the first step towards a brighter business future. Contact
                us today to explore how our business consulting services can
                drive innovation, increase efficiency, and position your company
                for enduring success. At the core of our business consulting
                philosophy.
              </p>
              <a className={style.redBtn}>
                Read More
              </a>
            </div>
          </div>
          {/* ////////////////////////////////// Pagination ///////////////////////// */}
          <div className={style.pagination}>
            {
              data?.totalPages > 1 && (
                <ul>
                  {/* //////////////////////////  prev page //////////////////////// */}

                  {data?.currentPage > 1 && (
                    <li>
                      <p
                        className={style.nextPage}
                        onClick={() => setPage(data?.currentPage - 1)}
                      >
                        <FaArrowLeft size={18} /> Prev
                      </p>
                    </li>
                  )}
                  {/* ////////////////////// page 1 ////////////////////////////// */}
                  <li>
                    <p
                      className={`${style.paginationLink} ${data?.currentPage === 1 ? style.selectedPage : ''}`}
                      onClick={() => setPage(1)}
                    >
                      {1}
                    </p>
                  </li>

                  {/* ////////////////////// page 2 ////////////////////////////// */}
                  {data?.currentPage < 2 && (
                    <li>
                      <p
                        className={`${style.paginationLink} ${data?.currentPage === 2 ? style.selectedPage : ''}`}
                        onClick={() => setPage(data?.currentPage + 1)}
                      >
                        {data?.currentPage + 1}
                      </p>
                    </li>
                  )}

                  {data?.currentPage > 1 && (
                    <li>
                      <p
                        className={`${style.paginationLink} ${data?.currentPage === data?.currentPage ? style.selectedPage : ''}`}
                        onClick={() => setPage(data?.currentPage)}
                      >
                        {data?.currentPage}
                      </p>
                    </li>
                  )}
                  {/* ////////////////////// page 3 ////////////////////////////// */}
                  {data?.currentPage === 1 && data?.currentPage + 2 <= data?.totalPages && (
                    <li>
                      <p
                        className={`${style.paginationLink} ${data?.currentPage === data?.currentPage + 2 ? style.selectedPage : ''}`}
                        onClick={() => setPage(data?.currentPage + 2)}
                      >
                        {data?.currentPage + 2}
                      </p>
                    </li>
                  )}
                  {data?.currentPage > 1 && data?.currentPage + 1 <= data?.totalPages && (
                    <li>
                      <p
                        className={`${style.paginationLink} ${data?.currentPage === data?.currentPage + 1 ? style.selectedPage : ''}`}
                        onClick={() => setPage(data?.currentPage + 1)}
                      >
                        {data?.currentPage + 1}
                      </p>
                    </li>
                  )}

                  {/* ///////////////////////// next Page ////////////////////////// */}
                  {data?.currentPage < data?.totalPages && (
                    <li>
                      <p
                        className={style.nextPage}
                        onClick={() => setPage(data?.currentPage + 1)}
                      >
                        Next <FaArrowRight size={18} />
                      </p>
                    </li>
                  )}
                </ul>
              )
            }
          </div>
        </div>


      </div>

      <div className={style.customColTwo}>
        <aside className={style.sidebarArea}>

          <div className={style.widgetSearch}>
            <h3 className={style.widgetTitle}>Recent Blogs</h3>
            {
              data?.allBlogs?.slice(1, 4)?.map((item, i) => (
                <div className={style.recentPost}>
                  <div className={style.mediaImg}>
                    <FaLink className={style.imgLink} />
                    <p >
                      <img
                        src={item?.image?.url}
                        alt="Blog Image"
                      />
                    </p>
                  </div>
                  <div className={style.mediaBody}>
                    <h4 className={style.postTitle}>
                      <p
                        className={style.mediaLink}

                      >
                        {item?.title}
                      </p>
                    </h4>
                    <div className={style.recentPostMeta}>
                      <p className={style.metaLink2}>
                        <SlCalender />
                        {item?.createdAt ? new Date(item?.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : ''}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>

          <div className={style.blogBanner}>
            <div className={style.bannerContainer}>
              <h3 className={style.bannerTitle}>
                Need Help? We Are Here To Help You
              </h3>
              <div className={style.bannerLogo}>
                <Image
                  src={logo}
                  height={100}
                  width={100}
                  alt="img"
                />
              </div>
              <h4 className={style.bannerSubtitle}>You Get Online support</h4>
              <h5 className={style.bannerLink}>
                <p
                  className={style.bannerCallLink}
                >
                  +971-55-746-2021  
                </p>
              </h5>
              <p className={style.bannerBtn}>
                Read More
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default BlogArea;
