import React from "react";

import Container from "@/components/containers";
import { Bubbles, RedButton } from "@/components/ui";
import ThreeDPizza from "../3d";

import { MobileOff } from "@/helpers/responsive";
import { Background, Pizza, Slogan, Title, Wrapper } from "./style";

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
