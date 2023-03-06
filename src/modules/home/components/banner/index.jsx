import React from "react";
import RedButton from "@/components/ui/buttons/red";
import { Wrapper, Title, Slogan, Pizza, Background } from "./style";
import ThreeDPizza from "../3d";
import Container from "@/components/containers";
import Bubbles from "@/components/ui/effects/bubble";

const Banner = () => {
  return (
    <Background>
      <Bubbles />
      <Container>
        <Wrapper>
          <Slogan className='left-appear'>
            <Title>From the Oven</Title>
            <p className='paragraph '>
              Taste the tastiest pizzas from our pizzeria - tender dough,
              delicious sauces and fresh ingredients will surely please you!
            </p>
            <RedButton>Order</RedButton>
          </Slogan>
          <Pizza>
            <ThreeDPizza />
          </Pizza>
        </Wrapper>
      </Container>
    </Background>
  );
};

export default Banner;
