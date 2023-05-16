import carousel from "@/assets/images/carousel2.png";
import PizzaCarousel from "@/components/carousel";
import Container from "@/components/containers";
import React from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { IoIosResize } from "react-icons/io";
import { TbWeight } from "react-icons/tb";
import {
  Description,
  Information,
  Ingredient,
  Item,
  List,
  Table,
  Text,
  Title,
  Wrapper,
} from "./style";

const Details = () => {
  return (
    <Container>
      <Wrapper>
        <PizzaCarousel carouselImg={carousel} />
        <Information>
          <Title>Havail Pizza</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Description>
          <Description>Ingredients: </Description>
          <List>
            <Ingredient>meal</Ingredient>
            <Ingredient>potato</Ingredient>
          </List>
          <Table>
            <Item>
              <Text className='head'>
                <span>Size </span>
                <IoIosResize />
              </Text>
              <Text>40sm</Text>
              <Text>30sm</Text>
            </Item>
            <Item>
              <Text className='head'>
                <span>Weight </span>
                <TbWeight />
              </Text>
              <Text>40sm</Text>
              <Text>30sm</Text>
            </Item>
            <Item>
              <Text className='head'>
                <span>Price </span>
                <AiOutlineDollarCircle />
              </Text>
              <Text>40sm</Text>
              <Text>30sm</Text>
            </Item>
          </Table>
        </Information>
      </Wrapper>
    </Container>
  );
};

export default Details;
