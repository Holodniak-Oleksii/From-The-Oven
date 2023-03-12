import React from "react";
import StarRatings from "react-star-ratings";

import Container from "@/components/containers";
import { IconUser } from "@/components/icons";
import { LittleMobileOff, LittleMobileOn } from "@/helpers/responsive";

import { Description, Flex, UserData, UserRaiding, Wrapper } from "./style";
import { Avatar } from "../../style";

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
            <LittleMobileOff>
              <StarRatings
                starRatedColor='#ffc107'
                numberOfStars={5}
                rating={data.rating}
                starDimension='25px'
                starSpacing='5px'
              />
            </LittleMobileOff>
            <LittleMobileOn>
              <StarRatings
                starRatedColor='#ffc107'
                numberOfStars={5}
                rating={data.rating}
                starDimension='15px'
                starSpacing='3px'
              />
            </LittleMobileOn>
            <span>{data.data}</span>
          </UserRaiding>
        </Flex>
        <Description>{data.text}</Description>
      </Wrapper>
    </Container>
  );
};

export default Item;
