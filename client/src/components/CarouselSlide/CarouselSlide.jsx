import React from "react";
import { Paper, Button } from "@material-ui/core";
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
        <h2>In slide h2</h2>
        <img src={slide} alt={name} />
        <Button className="Enlarge">Enlarge</Button>
      </div>
    </li>
  );
};
export default CarouselSlide;
