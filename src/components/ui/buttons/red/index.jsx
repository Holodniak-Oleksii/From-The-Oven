import React from "react";
import styled, { keyframes } from "styled-components";
import { createRipple } from "@/helpers/createRipple";

const ripple = keyframes`
  to {
    transform: scale(4);
    opacity: 0;
  }
`;

export const Wrapper = styled.button`
  width: fit-content;
  height: fit-content;
  padding: 12px 32px;
  background-color: #fc4734;
  color: #fff;
  position: relative;
  overflow: hidden;
  font-weight: 500;
  transition: background 400ms;
  color: #fff;
  outline: 0;
  border: 0;
  border-radius: 50px;

  span.ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ${ripple} 600ms linear;
    background-color: rgba(255, 255, 255, 0.7);
  }
  .title {
    position: relative;
    z-index: 1;
  }
  @media screen and (min-width: 1024px) {
    &:hover {
      background-color: #c31b08ff;
    }
  }
`;

const RedButton = (props) => {
  return (
    <Wrapper
      {...props}
      onClick={(e) => {
        props.onClick?.();
        createRipple(e);
      }}
    >
      <span className='title'>{props?.children}</span>
    </Wrapper>
  );
};

export default RedButton;
