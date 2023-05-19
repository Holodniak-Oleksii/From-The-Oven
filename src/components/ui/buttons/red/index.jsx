import { createRipple } from "@/helpers/createRipple";
import React from "react";
import styled, { keyframes } from "styled-components";

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
  position: relative;
  overflow: hidden;
  font-weight: 500;
  transition: background 400ms;
  outline: 0;
  border: 0;
  border-radius: 50px;
  border: 1px #fc4734 solid;
  white-space: nowrap;

  ${(props) =>
    props.outline
      ? `   
      color: #fc4734;
      @media screen and (min-width: 1024px) {
        &:hover {
          background-color: #c31b0818;
        }
      }
      `
      : `
      background-color: #fc4734;
      color: #fff;
      @media screen and (min-width: 1024px) {
        &:hover {
          background-color: #c31b08ff;
        }
      }
  `}

  span.ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ${ripple} 600ms linear;
    background-color: rgba(255, 255, 255, 0.7);
  }
  @media screen and (max-width: 767px) {
    padding: 6px 18px;
    font-size: 14px;
  }
`;

const Button = (props) => {
  return (
    <Wrapper
      {...props}
      onClick={(e) => {
        props.onClick?.(e);
        createRipple(e);
      }}
      type={props.type || "button"}
    >
      {props?.children}
    </Wrapper>
  );
};

export default Button;
