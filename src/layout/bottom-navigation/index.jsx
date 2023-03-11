import React from "react";
import { navigations } from "../data";
import { Wrapper, Item } from "./style";
import { Link } from "react-router-dom";
import { IconMarket } from "@/components/icons";

export const BottomNavigation = () => {
  return (
    <Wrapper>
      {navigations.map((item) => (
        <Item key={item?.id}>
          <Link to={item?.path}>{item?.icon}</Link>
        </Item>
      ))}
      <Item>
        <IconMarket fill={"#000000"} />
      </Item>
    </Wrapper>
  );
};
