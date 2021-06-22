import React, { useState } from "react";
import CarouselArrow from "../CarouselArrow/CarouselArrow";
import CarouselSlide from "../CarouselSlide/CarouselSlide";
import CarouselIndicator from "../CarouselIndicator/CarouselIndicator";
import { useStyles } from "./CarouselStyles";
import clsx from "clsx";

const Carousel = ({ slides, name, styling }) => {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index) => setActiveIndex(index);

  const goToPrevSlide = (e) => {
    e.preventDefault();

    let index = activeIndex;

    let slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    setActiveIndex(index);
  };

  const goToNextSlide = (e) => {
    e.preventDefault();

    let index = activeIndex;

    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    setActiveIndex(index);
  };

  return (
    <div className={clsx(classes.carouselContainer, styling)}>
      <div className={classes.carousel}>
        <CarouselArrow onClick={(e) => goToPrevSlide(e)} direction={"left"} />

        <ul className={classes.ul}>
          {slides &&
            slides.map((slide, index) => {
              console.log("slide", slide);
              return (
                <CarouselSlide
                  key={index}
                  index={index}
                  activeIndex={activeIndex}
                  slide={slide}
                  name={name}
                />
              );
            })}
        </ul>

        <CarouselArrow onClick={(e) => goToNextSlide(e)} direction={"right"} />

        <ul className={clsx(classes.carousel__indicators, classes.ul)}>
          {slides &&
            slides.map((slide, index) => (
              <CarouselIndicator
                key={index}
                index={index}
                activeIndex={activeIndex}
                isActive={activeIndex === index}
                onClick={(e) => goToSlide(index)}
                slide={slide}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Carousel;
