import React from "react";

import Container from "@/components/containers";
import Item from "./item";

import { Wrapper, Banner, Content } from "./style";
import bg from "@/assets/images/pizza.jpg";

const ProductsGrid = ({ data }) => {
  return (
    <Container>
      <Content>
        <Banner>
          <img src={bg} alt='img' />
        </Banner>
        <Wrapper>
          {data.map((item) => (
            <Item item={item} key={item.key} />
          ))}
        </Wrapper>
      </Content>
    </Container>
  );
};

export default ProductsGrid;
