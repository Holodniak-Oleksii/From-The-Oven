import React from "react";

import Container from "@/components/containers";
import { Bubbles, RedButton } from "@/components/ui";
import { LittleMobileOff } from "@/helpers/responsive";

import PizzaCarousel from "@/components/carousel";
import { Banner, Flex, Wrapper } from "./style";

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
            <PizzaCarousel />
          </LittleMobileOff>
        </Flex>
      </Container>
    </Wrapper>
  );
};

export default Advertisements;
