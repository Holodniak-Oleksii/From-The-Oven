import React from "react";
import Container from "@/components/containers";
import { Wrapper } from "./style";

const Item = ({ data }) => {
  return (
    <Container>
      <Wrapper>
        <h2>{data.name}</h2>
        <p>{data.text}</p>
        <span>{data.data}</span>
      </Wrapper>
    </Container>
  );
};

export default Item;
