import React, { useState } from "react";
import RedButton from "../../buttons/red";
import { Avatar, Group, Size, Wrapper } from "./style";

const Card = ({ item }) => {
  const [activeSize, setSelectedSize] = useState(item?.sizeLarge);
  return (
    <Wrapper className='product-card'>
      <Avatar src={item?.image} alt='pizza' />
      <h3 className='title'>{item?.name}</h3>
      <Size>
        <RedButton
          outline={activeSize !== item?.sizeSmall}
          onClick={() => setSelectedSize(item?.sizeSmall)}
          className='red-btn'
        >
          {item?.sizeSmall}sm
        </RedButton>
        <RedButton
          outline={activeSize !== item?.sizeLarge}
          onClick={() => setSelectedSize(item?.sizeLarge)}
          className='red-btn'
        >
          {item?.sizeLarge}sm
        </RedButton>
      </Size>
      <Group>
        <span className='price'>
          {activeSize === item?.sizeLarge
            ? item?.priceLarge
            : activeSize === item?.priceMedium
            ? item?.priceMedium
            : item?.priceSmall}
          $
        </span>
        <RedButton outline className='red-btn'>
          Order now
        </RedButton>
      </Group>
    </Wrapper>
  );
};

export default Card;
