import React from "react";

import Container from "@/components/containers";
import Item from "./item";

import {
  LittleDesktopOff,
  LittleDesktopOn,
  LittleMobileOff,
  TabletOff,
} from "@/helpers/responsive";

import { Wrapper, Banner, Content } from "./style";

import bg from "@/assets/images/pizza.jpg";

const ProductsGrid = ({ data }) => {
  return (
    <Container>
      <Content>
        <TabletOff>
          <Banner>
            <img src={bg} alt='img' />
          </Banner>
        </TabletOff>
        <Wrapper>
          <LittleDesktopOff>
            {data.map((item) => (
              <Item item={item} key={item.key} />
            ))}
          </LittleDesktopOff>
          <LittleMobileOff>
            <LittleDesktopOn>
              {data.slice(0, 6).map((item) => (
                <Item item={item} key={item.key} />
              ))}
            </LittleDesktopOn>
          </LittleMobileOff>
          <LittleDesktopOn>
            {data.slice(0, 4).map((item) => (
              <Item item={item} key={item.key} />
            ))}
          </LittleDesktopOn>
        </Wrapper>
      </Content>
    </Container>
  );
};

export default ProductsGrid;
