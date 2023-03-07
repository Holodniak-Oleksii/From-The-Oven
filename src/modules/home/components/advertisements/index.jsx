import React from "react";
import Container from "@/components/containers";
import { Wrapper, Flex, Image, Carousel, Pizza, Banner } from "./style";
import Bubbles from "@/components/ui/effects/bubble";
import pizza from "@/assets/images/pizza/2.png";
import carousel from "@/assets/images/carousel.png";
import RedButton from "@/components/ui/buttons/red";

const Advertisements = () => {
  return (
    <Wrapper>
      <Bubbles />
      <Container>
        <Flex>
          <Banner>
            <h1 className='title'>
              From the Oven <br />
              delicious pizza on weekends
            </h1>
            <RedButton>Order now</RedButton>
          </Banner>
          <Image>
            <Carousel src={carousel} alt='' />
            <Pizza src={pizza} alt='' />
          </Image>
        </Flex>
      </Container>
    </Wrapper>
  );
};

export default Advertisements;
