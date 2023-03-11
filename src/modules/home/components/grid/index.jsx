import React from "react";

import { ProductCard } from "@/components/ui";

import { Wrapper } from "./style";

const GrigPizza = ({ list }) => {
  return (
    <Wrapper>
      {list.map((item) => (
        <ProductCard item={item} key={item?.id} />
      ))}
    </Wrapper>
  );
};

export default GrigPizza;
