import { RedButton } from "@/components/ui";
import React from "react";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import { TO_ORDER } from ".";
import {
  Counter,
  Cover,
  Image,
  Indent,
  Item,
  List,
  Name,
  Price,
  Result,
  Text,
} from "./style";

const OrderList = ({ setStep }) => {
  const handlerToOrder = () => {
    setStep(TO_ORDER);
  };
  return (
    <>
      <List>
        <Item>
          <Image
            src='https://artgallery-bucket.s3.eu-central-1.amazonaws.com/1.png'
            alt='pizza'
          />
          <Text>
            <Name>Name</Name>
            <Price>123$</Price>
          </Text>
          <Counter>
            <button>
              <HiMinusSm />
            </button>
            <span>1</span>
            <button>
              <HiPlusSm />
            </button>
          </Counter>
        </Item>
      </List>
      <Indent />
      <Result>
        <Cover>
          Order amount
          <span>12121 $</span>
        </Cover>
        <RedButton className='order' onClick={handlerToOrder}>
          To order
        </RedButton>
      </Result>
    </>
  );
};

export default OrderList;
