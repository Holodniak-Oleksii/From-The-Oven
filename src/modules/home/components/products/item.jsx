import React from "react";
import StarRatings from "react-star-ratings";
import { Card, Flex, Price } from "./style";

const Item = ({ item }) => {
  return (
    <Card>
      <img src={item.image} alt='pizza' />
      <Flex>
        <h3>{item.title}</h3>
        <StarRatings
          starRatedColor='#ffc107'
          numberOfStars={5}
          rating={item.ratting}
          starDimension='25px'
          starSpacing='5px'
        />
        <Price>
          <span>{item.oldPrice}$</span>/{item.price}$
        </Price>
      </Flex>
    </Card>
  );
};

export default Item;
