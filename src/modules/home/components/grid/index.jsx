import React from "react";

import { ProductCard } from "@/components/ui";

import Pizza from "@/api/pizza";
import ProductCardLoader from "@/components/ui/cards/goods/loader";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Wrapper } from "./style";

const GrigPizza = () => {
  const [list, setList] = useState({ data: [], loading: true });
  const isLittleMobile = useMediaQuery({ maxWidth: 540 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ maxWidth: 1280 });
  const isLittleDesktop = useMediaQuery({ maxWidth: 1440 });
  const isDesktop = useMediaQuery({ maxWidth: 1620 });

  const COUNT_EL = isLittleMobile
    ? 4
    : isMobile
    ? 6
    : isLittleDesktop
    ? 8
    : isDesktop
    ? 10
    : 12;

  useEffect(() => {
    const get = async () => {
      setList((prev) => ({ ...prev, loading: true }));
      const api = new Pizza();
      const data = await api.getPizzasByLimit(COUNT_EL);
      setList({ data: data.result, loading: false });
    };
    get();
  }, [isMobile, isTablet, isLittleDesktop, isDesktop, isLittleMobile]);

  if (list.loading) {
    return (
      <Wrapper>
        {[...Array(COUNT_EL)].map((_, index) => (
          <ProductCardLoader key={index} />
        ))}
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      {list.data.map((item) => (
        <ProductCard item={item} key={item?.id} />
      ))}
    </Wrapper>
  );
};

export default GrigPizza;
