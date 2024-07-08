import React, { useState, useEffect } from "react";
import styles from "./bestselling.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Nav } from "react-bootstrap";
import Deals from "../deals/Deals";
import Dealsday from "../deals/dealsday";

const Bestselling = ({
  isbooks,
  topsellingdata,
  activeCategory,
  setActiveCategory,
  filterItem,
  ...props
}) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <>
      {/* ---------------------- banner img----------------------------- */}
      <div>
        <img
          src="./assets/images/bristore/banner.svg"
          alt=""
          className={`${styles.banner} w-100`}
        />
      </div>
      {/* ---------------------- Top 100 ----------------------------- */}
      <div className={`${styles.container} container relative mt-3`}>
        <Deals
          top10selling={isbooks?.books}
          title="Top 100 Best Selling Authors "
        />
      </div>
      {/* ---------- Best selling authors books banner img ------------ */}
      <div>
        <img
          src="./assets/images/bristore/ADVERT.svg"
          alt=""
          className={`${styles.banner} w-100 mt-2`}
        />
      </div>
      {/* ----------- Top 50 Best Selling books section  --------- */}
      <div
        className={`${styles.container} container relative mt-4 overflow-hidden`}
      >
        <h1>Top 50 Best Selling Books </h1>
        <div className="main d-flex flex-nowrap row  p-0 m-0">
          <div className={`${styles.btn} col-2 `}>
            <Nav className="flex-column mt-4">
              {isbooks?.books
                ?.reduce((values, item) => {
                  if (!values.includes(item.category)) {
                    values.push(item.category);
                  }
                  return values;
                }, [])
                .map((btn) => (
                  <Nav.Link
                    key={btn}
                    onClick={() => {
                      setActiveCategory(btn);
                      filterItem(btn);
                    }}
                    className={`${styles.button} my-1 ${
                      activeCategory === btn ? "active" : ""
                    } ${activeCategory === btn ? "bg-info" : "bg-success"}`}
                  >
                    {btn}
                  </Nav.Link>
                ))}
            </Nav>
          </div>
          <div className={`${styles.carouselside} col-8 col-md-8 col-lg-9`}>
            <Deals top10selling={topsellingdata} />
          </div>
        </div>
      </div>

      {/* --------------------  Deals of the day  -------------------- */}
      <Dealsday deals={isbooks?.books} day="dealsofday" />

      {/* ----------------  Top 10 Best Selling Authors ----------------- */}
      <div className={`${styles.container} container relative mt-4`}>
        <Deals
          top10selling={isbooks?.books}
          title="Top 10 Best Selling Authors "
        />
      </div>
    </>
  );
};

export default Bestselling;
