import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
`;

const Bubbles = ({ count = 50 }) => {
  return (
    <Wrapper>
      <div className='bubbles'>
        {[...Array(count)].map((x, i) => (
          <div key={i} className='bubble' />
        ))}
      </div>
    </Wrapper>
  );
};

export default Bubbles;
