import React from "react";
import styles from "./deals.module.css";
import { useSwiper } from "swiper/react";

const SwiperNavButtons = ({ dealsofday }) => {
  const swiper = useSwiper();

  return (
    <div className={`${styles.main} d-flex bd-highlight`}>
      <div className={`${styles.swipernavbtns} `}>
        <button
          onClick={() => swiper.slidePrev()}
          className="btn rounded-circle me-3 "
          style={{ color: dealsofday === "dealsofday" ? "white" : "green" }}
        >
          <span className={styles.arrow}>←</span>
        </button>
        <button
          onClick={() => swiper.slideNext()}
          className="btn rounded-circle  "
          style={{ color: dealsofday === "dealsofday" ? "white" : "green" }}
        >
          <span className={styles.arrow}>→</span>
        </button>
      </div>
    </div>
  );
};

export default SwiperNavButtons;
