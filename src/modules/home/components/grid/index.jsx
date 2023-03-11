import React from "react";

import { ProductCard } from "@/components/ui";

import { Wrapper } from "./style";
import {
  LittleMobileOff,
  LittleMobileOn,
  MobileOff,
  MobileOn,
} from "@/helpers/responsive";

const GrigPizza = ({ list }) => {
  return (
    <Wrapper>
      <MobileOff>
        {list.map((item) => (
          <ProductCard item={item} key={item?.id} />
        ))}
      </MobileOff>
      <LittleMobileOff>
        <MobileOn>
          {list.slice(0, 6).map((item) => (
            <ProductCard item={item} key={item?.id} />
          ))}
        </MobileOn>
      </LittleMobileOff>
      <LittleMobileOn>
        <MobileOn>
          {list.slice(0, 4).map((item) => (
            <ProductCard item={item} key={item?.id} />
          ))}
        </MobileOn>
      </LittleMobileOn>
    </Wrapper>
  );
};

export default GrigPizza;
