import React, { useRef } from "react";

import Banner from "./components/banner";
import useAnimation from "@/helpers/useAnimation";
import GrigPizza from "./components/grid";
import Bonus from "./components/bonus";
import Container from "@/components/containers";
import Advertisements from "./components/advertisements";
import Discount from "./components/discount";
import Count from "./components/count";
import Contact from "./components/contact";

import { Wrapper } from "./style";

import { counter, data, dataAction, feedback } from "./data";
import ProductsGrid from "./components/products/index";

const Home = () => {
  const ref = useRef();
  useAnimation(ref);
  return (
    <Wrapper ref={ref}>
      <Banner />
      <Container>
        <Bonus />
        <GrigPizza list={data} />
      </Container>
      <Advertisements />
      <Container>
        <Discount />
      </Container>
      <Count data={counter} />
      <ProductsGrid data={dataAction} />
      <Contact data={feedback} />
    </Wrapper>
  );
};

export default Home;
