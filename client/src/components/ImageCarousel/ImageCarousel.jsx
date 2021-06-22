import React from "react";
import Carousel from "react-material-ui-carousel/dist/components/Carousel";
import CarouselItem from "../CarouselItem/CarouselItem";

function ImageCarousel({ imgs, name }) {
  return (
    <Carousel
      next={(next, active) =>
        console.log(`we left ${active}, and are now at ${next}`)
      }
      prev={(prev, active) =>
        console.log(`we left ${active}, and are now at ${prev}`)
      }
    >
      {imgs.map((image, i) => (
        <CarouselItem key={i} name={name} img={image} />
      ))}
    </Carousel>
  );
}

export default ImageCarousel;
