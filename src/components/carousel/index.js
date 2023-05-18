import carousel from "@/assets/images/carousel.png";
import pizza from "@/assets/images/pizza/2.png";
import React from "react";
import styled, { keyframes } from "styled-components";
const rotate = keyframes`
    0%{
    transform: rotate(0deg)
    }
    50%{
        transform: rotate(180deg)
    }
    100%{
        transform: rotate(360deg)
    }
`;

const Pizza = styled.img`
  position: absolute;
  height: 70%;
  width: 70%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Carousel = styled.img`
  transition: all 0.4s linear;
  animation: ${rotate} 25s infinite linear;
  height: 100%;
  width: 100%;
`;
const Image = styled.div`
  position: relative;
  height: 100%;
  aspect-ratio: 1 / 1;
`;

const PizzaCarousel = ({ carouselImg, pizzaImg, withoutCarousel }) => {
  return (
    <Image className='carousel-pizza'>
      {!withoutCarousel && <Carousel src={carouselImg || carousel} alt='' />}
      <Pizza src={pizzaImg || pizza} alt='' />
    </Image>
  );
};

export default PizzaCarousel;
