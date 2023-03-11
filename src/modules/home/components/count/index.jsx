import React from "react";

import Container from "@/components/containers";

import { Flex, Wrapper, Item } from "./style";

const Count = ({ data }) => {
  return (
    <Wrapper>
      <Container>
        <Flex>
          {data.map((item) => (
            <Item key={item.id}>
              {item.count}
              <span> {item.title}</span>
            </Item>
          ))}
        </Flex>
      </Container>
    </Wrapper>
  );
};

export default Count;
