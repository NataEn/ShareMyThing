import clsx from "clsx";
import React from "react";
import { useStyles } from "./CarouselIndicatorStyles";
const CarouselIndicator = ({ index, activeIndex, onClick, slide }) => {
  const classes = useStyles();
  return (
    <li className={classes.carousel__indicators}>
      <img
        src={slide}
        alt={index}
        className={
          index === activeIndex
            ? clsx(classes.carousel__indicator, classes.active)
            : classes.carousel__indicator
        }
        onClick={onClick}
      />
    </li>
  );
};

export default CarouselIndicator;
