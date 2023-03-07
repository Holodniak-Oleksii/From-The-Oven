import React, { useRef } from "react";
import { Wrapper } from "./style";
import Banner from "./components/banner";
import useAnimation from "@/helpers/useAnimation";
import GrigPizza from "./components/grid";
import { data } from "./data";
import Bonus from "./components/bonus";
import Container from "@/components/containers";
import Advertisements from "./components/advertisements";

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
    </Wrapper>
  );
};

export default Home;
