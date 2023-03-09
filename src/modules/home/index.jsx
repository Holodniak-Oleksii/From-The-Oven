import React, { useRef } from "react";
import { Wrapper } from "./style";
import Banner from "./components/banner";
import useAnimation from "@/helpers/useAnimation";
import GrigPizza from "./components/grid";
import { counter, data, feedback } from "./data";
import Bonus from "./components/bonus";
import Container from "@/components/containers";
import Advertisements from "./components/advertisements";
import Discount from "./components/discount";
import Count from "./components/count";
import Contact from "./components/contact";

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
      <Contact data={feedback} />
    </Wrapper>
  );
};

export default Home;
