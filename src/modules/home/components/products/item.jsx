import React from "react";
import StarRatings from "react-star-ratings";

import {
  DesktopOff,
  DesktopOn,
  LittleMobileOn,
  LittleMobileOff,
} from "@/helpers/responsive";

import { Card, Flex, Price } from "./style";

const Item = ({ item }) => {
  return (
    <Card>
      <img src={item.image} alt='pizza' />
      <Flex>
        <h3>{item.title}</h3>
        <DesktopOff>
          <StarRatings
            starRatedColor='#ffc107'
            numberOfStars={5}
            rating={item.ratting}
            starDimension='25px'
            starSpacing='5px'
          />
        </DesktopOff>
        <LittleMobileOff>
          <DesktopOn>
            <StarRatings
              starRatedColor='#ffc107'
              numberOfStars={5}
              rating={item.ratting}
              starDimension='15px'
              starSpacing='3px'
            />
          </DesktopOn>
        </LittleMobileOff>
        <LittleMobileOn>
          <StarRatings
            starRatedColor='#ffc107'
            numberOfStars={5}
            rating={item.ratting}
            starDimension='20px'
            starSpacing='3px'
          />
        </LittleMobileOn>
        <Price>
          <span>{item.oldPrice}$</span>/{item.price}$
        </Price>
      </Flex>
    </Card>
  );
};

export default Item;
