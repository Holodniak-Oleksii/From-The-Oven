import React from "react";

import Container from "@/components/containers";
import { RedButton, Bubbles } from "@/components/ui";
import { LittleMobileOff } from "@/helpers/responsive";

import { Wrapper, Flex, Image, Carousel, Pizza, Banner } from "./style";

import pizza from "@/assets/images/pizza/2.png";
import carousel from "@/assets/images/carousel.png";

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
          <LittleMobileOff>
            <Image>
              <Carousel src={carousel} alt='' />
              <Pizza src={pizza} alt='' />
            </Image>
          </LittleMobileOff>
        </Flex>
      </Container>
    </Wrapper>
  );
};

export default Advertisements;
