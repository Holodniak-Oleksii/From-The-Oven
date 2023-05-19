import { IconMarket } from "@/components/icons";
import { useBasket } from "@/store/selectors/index";
import React from "react";
import { Link } from "react-router-dom";
import { navigations } from "../data";
import { Market } from "../header/style";
import { Item, Wrapper } from "./style";

export const BottomNavigation = ({ setOpenOrder }) => {
  const { amount } = useBasket();

  return (
    <Wrapper>
      {navigations.map((item) => (
        <Item key={item?.id}>
          <Link to={item?.path}>{item?.icon}</Link>
        </Item>
      ))}
      <Item>
        <Market
          onClick={() => {
            if (amount) setOpenOrder(true);
          }}
          amount={amount}
        >
          <IconMarket fill={"#000000"} />
        </Market>
      </Item>
    </Wrapper>
  );
};
