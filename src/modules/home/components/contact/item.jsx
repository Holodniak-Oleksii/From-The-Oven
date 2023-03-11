import React from "react";

import Container from "@/components/containers";
import { IconUser } from "@/components/icons";

import { Description, Flex, UserData, UserRaiding, Wrapper } from "./style";
import { Avatar } from "../../style";
import StarRatings from "react-star-ratings";

const Item = ({ data }) => {
  return (
    <Container>
      <Wrapper>
        <Flex>
          <Avatar>
            <IconUser />
          </Avatar>
          <UserData>
            <h2>{data.name}</h2>
            <span>{data.location}</span>
          </UserData>
          <UserRaiding>
            <StarRatings
              starRatedColor='#ffc107'
              numberOfStars={5}
              rating={data.rating}
              starDimension='25px'
              starSpacing='5px'
            />
            <span>{data.data}</span>
          </UserRaiding>
        </Flex>
        <Description>{data.text}</Description>
      </Wrapper>
    </Container>
  );
};

export default Item;
