import React, { useState, useContext } from 'react';
import { ResidenceContext } from "../contexts/ResidenceContextProvider";
import { useParams } from "react-router-dom";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

const CarouselComponent = (props) => {
  let { id } = useParams();
  const { residenceImages } = useContext(ResidenceContext);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === filteredArray.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? filteredArray.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  let filteredArray = [];
  if (residenceImages) {
    filteredArray = residenceImages.filter(image => image.imagelink)
  }

  let slides = null;
    slides = filteredArray.map((image) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={image.imagelink}
        >
          <img src={image.imagelink}/>
        </CarouselItem>
      );
    });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}>
      
     
      <CarouselIndicators items={filteredArray} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default CarouselComponent;