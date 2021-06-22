import React from "react";

import { useStyles } from "./CarouselSlideStyles";
import clsx from "clsx";

const CarouselSlide = ({ index, activeIndex, slide, name }) => {
  const classes = useStyles();

  return (
    <li
      className={
        index === activeIndex
          ? clsx(classes.carousel__slide, classes.active)
          : classes.carousel__slide
      }
    >
      <div className={classes.carouselSlide__content}>
        <img
          src={slide ? slide : process.env.PUBLIC_URL + "/noImg.jpg"}
          alt={name}
        />
        {/* <span className="Enlarge">Hover to Enlarge</span> */}
      </div>
    </li>
  );
};
export default CarouselSlide;
