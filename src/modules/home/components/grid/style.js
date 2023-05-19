import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  padding: 40px 0 20px 0;
  width: 100%;
  grid-gap: 26px;
  grid-template-columns: repeat(6, minmax(min(100%, 250px), 1fr));
  @media screen and (max-width: 1620px) {
    grid-template-columns: repeat(5, minmax(min(100%, 250px), 1fr));
  }
  @media screen and (max-width: 1440px) {
    grid-template-columns: repeat(4, minmax(min(100%, 250px), 1fr));
  }
  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(3, minmax(min(100%, 200px), 1fr));
  }
  @media screen and (max-width: 767px) {
    grid-gap: 16px;
    grid-template-columns: repeat(2, minmax(min(100%, 200px), 1fr));
  }
  @media screen and (max-width: 540px) {
    max-width: 250px;
    margin: 0 auto;
    grid-gap: 12px;
    grid-template-columns: repeat(1, minmax(min(100%, 160px), 1fr));
  }
`;
