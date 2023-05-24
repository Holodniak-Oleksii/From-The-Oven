import { RedButton } from "@/components/ui";
import { useBasket } from "@/store/selectors/index";
import React from "react";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import { TO_ORDER } from ".";

import { minusProductAction, plusProductAction } from "@/store/actions/basket";
import { List } from "../style";
import {
  Counter,
  Cover,
  Image,
  Indent,
  Item,
  Name,
  Price,
  Result,
  Text,
} from "./style";

const OrderList = ({ setStep }) => {
  const { pizzas, score } = useBasket();

  const handlerToOrder = () => {
    setStep(TO_ORDER);
  };

  return (
    <>
      <List>
        {pizzas.map((item) => (
          <Item key={item.id}>
            <Image src={item.image} alt='pizza' />
            <Text>
              <Name>{item.name}</Name>
              <Price>{item.size}sm</Price>
              <Price>{item.price.toFixed(2)}$</Price>
            </Text>
            <Counter>
              <button onClick={() => minusProductAction(item)}>
                <HiMinusSm />
              </button>
              <span>{item.count}</span>
              <button onClick={() => plusProductAction(item)}>
                <HiPlusSm />
              </button>
            </Counter>
          </Item>
        ))}
      </List>
      <Indent />
      <Result>
        <Cover>
          Order amount
          <span>{Number(score).toFixed(2)}$</span>
        </Cover>
        <RedButton className='order' onClick={handlerToOrder}>
          To order
        </RedButton>
      </Result>
    </>
  );
};

export default OrderList;
