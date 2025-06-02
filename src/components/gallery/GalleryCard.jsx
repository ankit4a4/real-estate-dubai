"use client"
import React, { useEffect, useState } from 'react'
import style from "../../style/gallery/GalleryCard.module.css"
import Image from 'next/image'
import img from "../../../public/webp/img14.webp"
import { useGetGalleryQuery } from '@/store/Slices/PropertySlice'

const GalleryCard = () => {
    const [page, setPage] = useState(1);
    const [apiData, setApiData] = useState([]);

    const { data, isLoading, isError } = useGetGalleryQuery(page);
    useEffect(() => {
        if (data && data.gallery) {
            setApiData(prevData => {
                const newData = [...prevData];
                newData[page - 1] = data.gallery;
                return newData;
            });
        }
    }, [data, page]);
    const allData = apiData.flat();
    console.log(data)
    if (isLoading) {
        console.log("loading")
    }
    return (
        <>
            <div className={style.Gallery_container}>
                {allData?.map((item, i) => (
                    <div className={style.galleryCard} key={i}>
                        <div className={style.GalleryCardImageBox}>
                            <Image
                                src={item?.gallery?.url}
                                alt="img"
                                height={500}
                                width={500}
                            />
                            <div className={style.ImageDetails}>
                                <p>{item?.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {
                data?.totalPages > 1 && page < data?.totalPages && <div className={style.LoadMoreButton}>
                    <button onClick={() => setPage(page + 1)}>
                        {
                            isLoading ? "Loading..." : "Load More"
                        }
                    </button>
                </div>
            }
        </>
    );
};

export default GalleryCard;