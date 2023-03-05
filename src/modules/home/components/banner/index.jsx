import React from "react";
import RedButton from "@/components/ui/buttons/red";
import { Wrapper, Title, Slogan, Pizza, Background } from "./style";
import ThreeDPizza from "../3d";
import Container from "@/components/containers";

const Banner = () => {
  return (
    <Background>
      <Container>
        <Wrapper>
          <Slogan className='left-appear'>
            <Title>Pizza</Title>
            <p className='paragraph '>
              Taste the tastiest pizzas from our pizzeria - tender dough,
              delicious sauces and fresh ingredients will surely please you!
            </p>
            <RedButton>Order</RedButton>
          </Slogan>
          <Pizza className='right-appear'>
            <ThreeDPizza />
          </Pizza>
        </Wrapper>
      </Container>
    </Background>
  );
};

export default Banner;
