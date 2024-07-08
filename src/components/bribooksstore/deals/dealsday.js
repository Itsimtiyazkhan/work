import React from "react";
import styles from "./dealsday.module.css";
import { Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperNavButtons from "./SwiperNavButtons";
import Link from "next/link";

const Dealsday = ({ deals }) => {
  console.log(deals);
  const deal_data = [
    {
      id: 1,
      image: "./assets/images/bristore/Group 64394.svg",
      authore: "By Arthur Gonzalez",
      bookname: "A God Who Hates Women",
      price: "170.00",
      total: "99",
      sold: "21",
    },
    {
      id: 2,
      image: "./assets/images/bristore/Castle .svg",
      authore: "By Arthur Gonzalez",
      bookname: "A God Who Hates Women",
      price: "170.00",
      total: "120",
      sold: "24",
    },
    {
      id: 3,
      image: "./assets/images/bristore/hans.svg",
      authore: "By Arthur Gonzalez",
      bookname: "A God Who Hates Women",
      price: "170.00",
      total: "99",
      sold: "21",
    },
    {
      id: 4,
      image: "./assets/images/bristore/Group 64394.svg",
      authore: "By Arthur Gonzalez",
      bookname: "A God Who Hates Women",
      price: "170.00",
      total: "99",
      sold: "21",
    },
    {
      id: 5,
      image: "./assets/images/bristore/Group 64394.svg",
      authore: "By Arthur Gonzalez",
      bookname: "A God Who Hates Women",
      price: "170.00",
      total: "99",
      sold: "21",
    },
  ];
  const Imgurl =
    "https://youbooks-storage-5fd6173683748-webdev.s3.amazonaws.com/";
  return (
    <div className={`${styles.containerfluid} container-fluid  py-5 `}>
      <div className="container main d-flex ">
        <div className="container p-0">
          <Swiper
            spaceBetween={65}
            slidesPerView={6}
            className="my-2 slide d-flex flex-column-reverse"
            breakpoints={{
              425: {
                width: 400,
                slidesPerView: 1,
                spaceBetween: 100,
              },

              768: {
                width: 768,
                slidesPerView: 2,
                spaceBetween: 70,
              },
              1280: {
                width: 1280,
                slidesPerView: 3,
                spaceBetween: 80,
              },
            }}
          >
            <div className={`${styles.main} d-flex bd-highlight py-3`}>
              <div className={`${styles.head} me-auto my-2 `}>
                <h1 className="text-black">Deals of the Day</h1>
              </div>
              <div>
                <SwiperNavButtons />
              </div>
            </div>
            {deals?.map((deal) => (
              <SwiperSlide className="m-0 p-0 me-2" key={deal.id}>
                <div className="row m-0">
                  <div className={`${styles.card} d-flex py-3 px-3`}>
                    <div className={styles.book_img}>
                      <img
                        src={Imgurl + "public/" + deal.cover_image}
                        className="bookimg"
                        alt=""
                      />
                    </div>
                    <div className={`${styles.cardcontent} ps-3 `}>
                      <p className="mb-0">{deal.author_name}</p>
                      <h4>{deal.name}</h4>
                      <h3>${deal.amazon_price}</h3>
                      <p className="mb-0">Already sold: {deal.sold}</p>
                      {/* <div className="progress my-2">
                        <div
                          className="progress-bar bg-warning "
                          style={{ width: "25%" }}
                          role="progressbar"
                          aria-valuenow="21"
                          aria-valuemin="100"
                          aria-valuemax="120"
                        ></div>
                      </div> */}
                      {/* <Button variant="success"> Add to Cart → </Button> */}
                      <div className={`${styles.cartbtn} bd-highlight mb-3`}>
                        <Link href="/">
                          <Button className={styles.btncolor}>
                            <span>Add to Cart → </span>
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Dealsday;
