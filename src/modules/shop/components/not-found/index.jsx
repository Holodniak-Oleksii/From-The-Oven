import { flex_center } from "@/assets/scss/global";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 60vh;
  ${flex_center}
  font-size:2rem;
  font-weight: 900;
  line-height: 2.5rem;
  font-style: italic;
  text-align: center;
  color: RGB(255, 193, 7);
`;

const NotFound = () => {
  return <Wrapper>No pizzas not found</Wrapper>;
};

export default NotFound;
