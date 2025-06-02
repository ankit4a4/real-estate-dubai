"use client";
import React, { useEffect, useState } from "react";
import style from "../../style/properties/Properties.module.css";
import { IoCloseSharp, IoSearch } from "react-icons/io5";
import PropertiCard from "./PropertiCard";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { useGetAllPropertyQuery } from "@/store/Slices/PropertySlice";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
// import { useRouter } from 'next/router';

const PropertiData = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [rentStatus, setRentStatus] = useState("");
  const [showPriceField, setShowPriceField] = useState(false);
  const [value, setValue] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEmirates, setSelectedEmirates] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [category, setCategory] = useState("");
  // const [address, setAddress] = useState("")

  const [queryParams, setQueryParams] = useState({
    category: "",
    search: "",
    emirates: "",
    buy: "",
    rent: "",
    maxPrice: "",
    page: 1,
    limit: 10,
  });

  // console.log("queryParams:::::::::::::::::::::::::::::::;", queryParams);

  // Use effect to update the URL query whenever `queryParams` changes
  useEffect(() => {
    const newQueryParams = {};

    if (queryParams.category) newQueryParams.category = queryParams.category;
    if (queryParams.search) newQueryParams.search = queryParams.search;
    if (queryParams.emirates) newQueryParams.emirates = queryParams.emirates;
    if (queryParams.buy) newQueryParams.buy = queryParams.buy;
    if (queryParams.rent) newQueryParams.rent = queryParams.rent;
    if (queryParams.maxPrice) newQueryParams.maxPrice = queryParams.maxPrice;
 

    // console.log("newQueryParams", newQueryParams);
    // Only update the URL if there are valid query params
    if (Object.keys(newQueryParams).length > 0) {
      const queryString = new URLSearchParams(newQueryParams).toString();
      router.push(`/properties${queryString ? `?${queryString}` : ''}`);
    }
  }, [queryParams, router]);

  // console.log("queryParmas::::::::::::::", queryParams)

  const { data, isSuccess, isLoading, isError } = useGetAllPropertyQuery({
    queryParams,
    page,
    limit: 10,
  });
  // console.log("::::;;;data", data)
  const handleSubmit = (e) => {
    e.preventDefault();
    setCategory(formData.category);
    setAddress(formData.address);
    setPage(1);
  };

  const handleSearch = () => {
    setQueryParams({
      ...queryParams,
      search: searchTerm,
      emirates: selectedEmirates,
      category: propertyType,
      buy: rentStatus === "buy" ? true : false,
      rent: rentStatus === "rent" ? true : false,
      maxPrice: value > 0 ? value.toString() : "",
    });
  };

  useEffect(() => {
    window.scrollTo({ top: 400, left: 0, behavior: "smooth" });
  }, [page]);

  useEffect(() => {
    if (isError) {
      console.log("error");
    }
  });

  const rendValue = [
    {
      name: "BUY",
      link: "buy",
    },
    {
      name: "RENT",
      link: "rent",
    },
  ];

  //////////////////////// input range code ///////////////////////////////////////

  const handleSliderChange = (event) => {
    const rawValue = parseInt(event.target.value, 10);
    let finalValue;

    if (rawValue <= 10) {
      // 0 to 100k (10k increments)
      finalValue = rawValue * 10000;
    } else if (rawValue <= 20) {
      // 100k to 1M (100k increments)
      finalValue = 100000 + (rawValue - 10) * 100000;
    } else {
      // 1M to 100M (1M increments)
      finalValue = 1000000 + (rawValue - 20) * 1000000;
    }

    setValue(finalValue);
  };

  // Function to format numbers (e.g., 1000000 -> 1M)
  const formatNumber = (num) => {
    if (num >= 1000000) {
      const millionValue = (num / 1000000).toFixed(1);
      return `${millionValue}M (${millionValue * 1000}k)`;
    } else if (num >= 1000) {
      const thousandValue = (num / 1000).toFixed(1);
      return `${thousandValue}k`;
    } else {
      return num.toString();
    }
  };

  const showProgressMessage = (num) => {
    if (num >= 1000000) {
      const millionValue = (num / 1000000).toFixed(1);
      return `${millionValue}M`;
    } else if (num >= 1000) {
      const thousandValue = (num / 1000).toFixed(1);
      return `${thousandValue}k`;
    } else {
      return `${num}`;
    }
  };
  return (
    <section className={style.propertiContainer}>
      <div className={style.searchForm}>
        {/* ////////////////////////////// input search /////////////////////////////////////////// */}

        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* ////////////////////////////// Emirates Filter /////////////////////////////// */}

        <select
          value={selectedEmirates}
          onChange={(e) => setSelectedEmirates(e.target.value)}
        >
          <option value="">Select Emirates</option>
          <option value="Abu Dhabi">Abu Dhabi</option>
          <option value="Dubai">Dubai</option>
          <option value="Sharjah">Sharjah</option>
          <option value="Ajman">Ajman</option>
          <option value="Umm Al Quwain">Umm Al Quwain</option>
          <option value="Ras Al Khaimah">Ras Al Khaimah</option>
          <option value="Fujairah">Fujairah</option>
        </select>

        {/* ////////////////////////////// Property type /////////////////////////////// */}

        <select
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
        >
          <option value=""> Property type</option>
          <option value="Off Plan">Off Plan</option>
          <option value="Ready To Move">Ready To Move</option>
        </select>

        {/* /////////////////// rant and buy status //////////////// */}
        <div className={style.rent}>
          {rendValue?.map((item, i) => (
            <p
              key={i}
              style={{
                backgroundColor:
                  item.link === rentStatus
                    ? "var(--theme-color)"
                    : "transparent",
                color:
                  item.link === rentStatus
                    ? "var(--white-color)"
                    : "var(--theme-color)",
              }}
              onClick={() => setRentStatus(item.link)}
            >
              {item.name}
            </p>
          ))}
        </div>

        {/* ///////////////////// Price status ///////////////////// */}

        <button
          className={style.PriceBtn}
          onClick={() => setShowPriceField(true)}
        >
          {showProgressMessage(value)} - MAX
        </button>

        {showPriceField && (
          <div className={style.selectPriceBox}>
            <p>
              Price
              <span
                style={{ cursor: "pointer", color: "red", fontSize: "1.5rem" }}
                onClick={() => setShowPriceField(false)}
              >
                <IoCloseSharp />
              </span>
            </p>
            <p>{showProgressMessage(value)} - NO Max</p>
            <input
              type="range"
              min="0"
              max="119"
              defaultValue="0"
              onChange={handleSliderChange}
            />

            <p>
              {showProgressMessage(value)}
              <span>100M</span>
            </p>
          </div>
        )}

        {/* //////////////////////////////// Search form ////////////////////////// */}

        <button className={style.thBtn} onClick={handleSearch} type="submit">
          <IoSearch size={19} /> Search
        </button>
      </div>
      <div className={style.cardWrapper}>
        {isSuccess &&
          data?.properties?.map((item, i) => {
            return <PropertiCard item={item} key={i} />;
          })}
      </div>
      <div className={style.pagination}>
        {data?.totalPages > 1 && (
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
                className={`${style.paginationLink} ${
                  data?.currentPage === 1 ? style.selectedPage : ""
                }`}
                onClick={() => setPage(1)}
              >
                {1}
              </p>
            </li>

            {/* ////////////////////// page 2 ////////////////////////////// */}
            {data?.currentPage < 2 && (
              <li>
                <p
                  className={`${style.paginationLink} ${
                    data?.currentPage === 2 ? style.selectedPage : ""
                  }`}
                  onClick={() => setPage(data?.currentPage + 1)}
                >
                  {data?.currentPage + 1}
                </p>
              </li>
            )}

            {data?.currentPage > 1 && (
              <li>
                <p
                  className={`${style.paginationLink} ${
                    data?.currentPage === data?.currentPage
                      ? style.selectedPage
                      : ""
                  }`}
                  onClick={() => setPage(data?.currentPage)}
                >
                  {data?.currentPage}
                </p>
              </li>
            )}

            {/* ////////////////////// page 3 ////////////////////////////// */}
            {data?.currentPage === 1 &&
              data?.currentPage + 2 <= data?.totalPages && (
                <li>
                  <p
                    className={`${style.paginationLink} ${
                      data?.currentPage === data?.currentPage + 2
                        ? style.selectedPage
                        : ""
                    }`}
                    onClick={() => setPage(data?.currentPage + 2)}
                  >
                    {data?.currentPage + 2}
                  </p>
                </li>
              )}
            {data?.currentPage > 1 &&
              data?.currentPage + 1 <= data?.totalPages && (
                <li>
                  <p
                    className={`${style.paginationLink} ${
                      data?.currentPage === data?.currentPage + 1
                        ? style.selectedPage
                        : ""
                    }`}
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
                  {isLoading ? "Loading..." : "Next"}
                  <FaArrowRight size={18} />
                </p>
              </li>
            )}
          </ul>
        )}
      </div>
    </section>
  );
};

export default PropertiData;
