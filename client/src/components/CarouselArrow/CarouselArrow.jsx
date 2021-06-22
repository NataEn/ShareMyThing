import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { useStyles } from "./CarouselArrowStyles";
import { ArrowForward, ArrowBack } from "@material-ui/icons";
import clsx from "clsx";
const CarouselLeftArrow = ({ direction, onClick }) => {
  const classes = useStyles();
  return (
    <IconButton
      aria-label="arrow"
      component="span"
      className={clsx(classes.carousel__arrow, classes[direction])}
      onClick={onClick}
    >
      {direction === "left" ? (
        <ArrowBack size="small" />
      ) : (
        <ArrowForward size="small" />
      )}
    </IconButton>
  );
};

export default CarouselLeftArrow;
