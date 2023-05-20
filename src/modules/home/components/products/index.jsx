import Container from "@/components/containers";
import { TabletOff } from "@/helpers/responsive";
import React from "react";
import Item from "./item";

import { Banner, CardLoader, Content, Wrapper } from "./style";

import Pizza from "@/api/pizza";
import bg from "@/assets/images/pizza.jpg";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useMediaQuery } from "react-responsive";

const ProductsGrid = ({ data }) => {
  const [list, setList] = useState({ data: [], loading: true });
  const isLittleMobile = useMediaQuery({ maxWidth: 540 });
  const isTablet = useMediaQuery({ maxWidth: 1280 });

  const COUNT_EL = isLittleMobile ? 4 : isTablet ? 10 : 12;

  useEffect(() => {
    const get = async () => {
      setList((prev) => ({ ...prev, loading: true }));
      const api = new Pizza();
      const data = await api.getPizzasByLimit(COUNT_EL);
      setList({ data: data.result, loading: false });
    };
    get();
  }, [isTablet, isLittleMobile]);

  return (
    <Container>
      <Content>
        <TabletOff>
          <Banner>
            <img src={bg} alt='img' />
          </Banner>
        </TabletOff>
        <Wrapper>
          {list?.loading
            ? [...Array(COUNT_EL)].map((x, i) => (
                <CardLoader>
                  <Skeleton className='skeleton' />
                </CardLoader>
              ))
            : list?.data.map((item) => <Item item={item} key={item.key} />)}
        </Wrapper>
      </Content>
    </Container>
  );
};

export default ProductsGrid;
