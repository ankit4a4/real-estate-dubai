"use client";
import React, { useState } from "react";
import style from "../../style/properties/PropertiCard.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const PropertiCard = ({ item }) => {
  const route = useRouter();

  const navigateTo = (id) => {
    route.push(`/properties/${id}`);
  };

  return (
    <div
      className={style.card}
      key={item.title}
      onClick={() => navigateTo(item?._id)}
    >
      <div className={style.propertyCard}>
        <div className={style.propertyCardThumb}>
          <img src={item?.image} alt="img" />
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center", marginTop: "3%" }}>
          <h4 className={style.propertyCardTitle}>
            <Link href="/" className={style.link}>
              {item?.title}
            </Link>
          </h4>

          <h4 className={style.propertyCardTitle} style={{ textDecoration: "underline" }}>

            {item?.buy === true ? "Buy" : item?.rent === true ? "Rent" : ""}
          </h4>
        </div>
        <div className={style.propertyCardDetails}>

          <div className={style.mediaLeft}>


            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h5
                className={style.propertyCardPrice}
                style={{ textDecoration: "line-through" }}
              >
                {item?.propertyPrice}
              </h5>
              <h5 className={style.propertyCardPrice}>{item?.ourPrice}</h5>
            </div>
            <p className={style.propertyCardLocation}>{item?.addressLine}</p>
          </div>
          <div className={style.btnWrap}>
            <p className={style.thBtn} style={{ cursor: "pointer" }}>Details</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiCard;
