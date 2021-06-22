import clsx from "clsx";
import React from "react";
import { useStyles } from "./CarouselIndicatorStyles";
const CarouselIndicator = ({ index, activeIndex, onClick }) => {
  const classes = useStyles();
  return (
    <li className={classes.carousel__indicators}>
      <button
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
