import React, { useState } from "react";
import RedButton from "../../buttons/red";
import { Wrapper, Avatar, Size, Group } from "./style";

const ProductCard = ({ item }) => {
  const [activeSize, setSelectedSize] = useState(40);
  return (
    <Wrapper>
      <Avatar src={item?.image} alt='pizza' />
      <h3 className='title'>{item?.title}</h3>
      <Size>
        <RedButton
          outline={activeSize === 40}
          onClick={() => setSelectedSize(30)}
          className='red-btn'
        >
          30sm
        </RedButton>
        <RedButton
          outline={activeSize === 30}
          onClick={() => setSelectedSize(40)}
          className='red-btn'
        >
          40sm
        </RedButton>
      </Size>
      <Group>
        <span className='price'>{item.price.toFixed(2)}$</span>
        <RedButton outline className='red-btn'>
          Order now
        </RedButton>
      </Group>
    </Wrapper>
  );
};

export default ProductCard;
