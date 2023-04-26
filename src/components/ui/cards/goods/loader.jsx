import React from "react";
import Skeleton from "react-loading-skeleton";
import { Group, Size, Wrapper } from "./style";

const ProductCardLoader = () => {
  return (
    <Wrapper className='product-card'>
      <Skeleton height={"100%"} />
      <h3 className='title'>
        <Skeleton />
      </h3>
      <Size>
        <Skeleton className='red-btn' />
        <Skeleton className='red-btn' borderRadius={"0 50px 50px 0"} />
      </Size>
      <Group>
        <span className='price'>
          <Skeleton />
        </span>
        <Skeleton
          height={"100%"}
          width={70}
          className='red-btn'
          borderRadius={50}
        />
      </Group>
    </Wrapper>
  );
};

export default ProductCardLoader;
