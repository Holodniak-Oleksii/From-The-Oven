import React from "react";
import Skeleton from "react-loading-skeleton";
import { head } from "./data";
import { Background, Content, Item, Row } from "./styles";
const TableLoader = () => {
  const renderRows = () => {
    return [...Array(10)].map((_, i) => (
      <Row key={i}>
        {[...Array(8)].map((_, i) => (
          <Item key={i}>
            <Skeleton />
          </Item>
        ))}
      </Row>
    ));
  };

  return (
    <Background>
      <Content>
        <Row head>
          {head.map((item, id) => (
            <Item key={id}>{item}</Item>
          ))}
        </Row>
        {renderRows()}
      </Content>
    </Background>
  );
};

export default TableLoader;
