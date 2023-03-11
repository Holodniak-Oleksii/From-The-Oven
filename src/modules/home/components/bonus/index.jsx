import React from "react";

import { Avatar } from "../../style";
import { Wrapper, Item } from "./style";

import { data } from "./data";

const Bonus = () => {
  return (
    <Wrapper>
      {data.map((item) => (
        <Item key={item.id}>
          <Avatar>{item.icon}</Avatar>
          <h2>{item.title}</h2>
          <p>{item.subtitle}</p>
        </Item>
      ))}
    </Wrapper>
  );
};

export default Bonus;
