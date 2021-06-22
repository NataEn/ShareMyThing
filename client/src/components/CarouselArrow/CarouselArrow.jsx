import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { useStyles } from "./CarouselArrowStyles";
import { ArrowForward, ArrowBack } from "@material-ui/icons";
import clsx from "clsx";
const CarouselLeftArrow = ({ direction, onClick }) => {
  const classes = useStyles();
  return (
    <button
      className={clsx(classes.carousel__arrow, classes[direction])}
      onClick={onClick}
    >
      <IconButton color="primary" aria-label="upload picture" component="span">
        {direction === "left" ? <ArrowBack /> : <ArrowForward />}
      </IconButton>
    </button>
  );
};

export default CarouselLeftArrow;
