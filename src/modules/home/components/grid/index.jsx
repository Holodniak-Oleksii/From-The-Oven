import React from "react";
import ProductCard from "@/components/ui/cards/goods";
import { Wrapper } from "./style";
import Container from "@/components/containers";

const GrigPizza = ({ list }) => {
  return (
    <Container>
      <Wrapper className='bottom-appear'>
        {list.map((item) => (
          <ProductCard item={item} key={item?.id} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default GrigPizza;
