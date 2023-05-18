import { addProductsAction } from "@/store/actions/basket";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RedButton from "../../buttons/red";
import { Avatar, Group, Size, Wrapper } from "./style";

const Card = ({ item }) => {
  const [activeSize, setSelectedSize] = useState(item?.sizeLarge);
  const push = useNavigate();
  const handlerDetails = () => {
    push(`/pizza/${item.id}`);
  };

  const handlerOrder = (e) => {
    e.stopPropagation();
    const product = {
      id: item.id,
      image: item.image,
      name: item.name,
      size: activeSize,
      price:
        activeSize === item?.sizeLarge ? item?.priceLarge : item?.priceSmall,
    };
    addProductsAction(product);
  };
  return (
    <Wrapper className='product-card' onClick={handlerDetails}>
      <Avatar src={item?.image} alt='pizza' />
      <h3 className='title'>{item?.name}</h3>
      <Size>
        <RedButton
          outline={activeSize !== item?.sizeSmall}
          onClick={(e) => {
            e.stopPropagation();
            setSelectedSize(item?.sizeSmall);
          }}
          className='red-btn'
        >
          {item?.sizeSmall}sm
        </RedButton>
        <RedButton
          outline={activeSize !== item?.sizeLarge}
          onClick={(e) => {
            e.stopPropagation();
            setSelectedSize(item?.sizeLarge);
          }}
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
        <RedButton outline className='red-btn' onClick={handlerOrder}>
          Order now
        </RedButton>
      </Group>
    </Wrapper>
  );
};

export default Card;
