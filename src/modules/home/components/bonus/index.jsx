import React from "react";
import { Avatar } from "../../style";
import { data } from "./data";
import { Wrapper, Item } from "./style";

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
