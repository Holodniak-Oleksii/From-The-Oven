import React, { useRef } from "react";
import { Wrapper } from "./style";
import Banner from "./components/banner";
import useAnimation from "@/helpers/useAnimation";

const Home = () => {
  const ref = useRef();
  useAnimation(ref);
  return (
    <Wrapper ref={ref}>
      <Banner />
    </Wrapper>
  );
};

export default Home;
