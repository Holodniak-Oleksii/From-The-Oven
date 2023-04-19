import React from "react";
import styled from "styled-components";

export const MainWrapper = styled.section`
  width: 100%;
  max-width: 1920px;
  margin: auto;
  padding: 0 100px;
  ${(props) => props.isMarginForHeader && "margin-top: 80px;"}
  @media screen and (max-width: 1920px) {
    padding: 0 80px;
  }
  @media screen and (max-width: 1600px) {
    padding: 0 60px;
  }
  @media screen and (max-width: 1440px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 1024px) {
    padding: 0 32px;
  }
  @media screen and (max-width: 767px) {
    padding: 0 16px;
  }
`;

const Container = ({ children, isMarginForHeader }) => {
  return (
    <MainWrapper className='container' isMarginForHeader={isMarginForHeader}>
      {children}
    </MainWrapper>
  );
};

export default Container;
