import React from "react";
import Skeleton from "react-loading-skeleton";
import { Category, Flex, Wrapper } from "./style";
const FilterLoader = () => {
  return (
    <Wrapper>
      <Flex>
        <Skeleton height={48} />
      </Flex>
      <Category>
        <Skeleton height={48} />
      </Category>
    </Wrapper>
  );
};

export default FilterLoader;
