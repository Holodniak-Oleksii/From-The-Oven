import React, { useRef } from "react";
import { Wrapper } from "./style";
import Banner from "./components/banner";
import useAnimation from "@/helpers/useAnimation";
import GrigPizza from "./components/grid";
import { data } from "./data";

const Home = () => {
  const ref = useRef();
  useAnimation(ref);
  return (
    <Wrapper ref={ref}>
      <Banner />
      <GrigPizza list={data} />
    </Wrapper>
  );
};

export default Home;
