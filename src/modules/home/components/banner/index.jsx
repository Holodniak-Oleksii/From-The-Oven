import React from "react";

import ThreeDPizza from "../3d";
import Container from "@/components/containers";
import { Bubbles, RedButton } from "@/components/ui";

import { Wrapper, Title, Slogan, Pizza, Background } from "./style";
import { MobileOff } from "@/helpers/responsive";

const Banner = () => {
  return (
    <Background>
      <Bubbles />
      <Container>
        <Wrapper>
          <Slogan>
            <Title>From the Oven</Title>
            <p className='paragraph '>
              Taste the tastiest pizzas from our pizzeria - tender dough,
              delicious sauces and fresh ingredients will surely please you!
            </p>
            <RedButton className='red-btn'>Order</RedButton>
          </Slogan>
          <MobileOff>
            <Pizza>
              <ThreeDPizza />
            </Pizza>
          </MobileOff>
        </Wrapper>
      </Container>
    </Background>
  );
};

export default Banner;
