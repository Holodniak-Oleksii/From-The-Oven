import { flex_center } from "@/assets/scss/global";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const selectStyles = {
  container: (styles) => ({
    ...styles,
    height: "44px",
    minHeight: "44px",
    border: "none",
    borderRadius: 8,
  }),
  control: (styles) => ({
    ...styles,
    width: "100%",
    minHeight: "44px",
    with: "100%",
    border: "1px solid #fc4734",
    boxShadow: "none",
    borderRadius: "8px",
    color: "#b4d7fb",
    cursor: "pointer",
    boxSizing: "border-box",
    padding: "0 0 0 36px",
    "&:hover": {
      boxShadow: `0px 0px 4px rgba(0, 0, 0, 0.2)`,
    },
  }),
  menu: (styles) => ({
    ...styles,
    zIndex: 5000,
    borderRadius: "8px",
    border: " 1px solid #fc4734",
  }),
  valueContainer: (styles) => ({
    ...styles,
    padding: 0,
    margin: 0,
    caretColor: "#fc4734",
    color: "#191919",
  }),
  input: (styles) => ({
    ...styles,
    padding: 0,
    margin: 0,
  }),
  option: (styles, state) => ({
    ...styles,
    transition: "all 0.3s ease",
    cursor: "pointer",
    padding: " 10px 16px",
    background: state.isSelected
      ? "linear-gradient(90deg, rgba(255, 3, 3, 0.7) 0%, rgba(247, 186, 31, 1) 100%)"
      : "transparent",
    "&:hover": {
      background:
        "linear-gradient(90deg, rgba(255, 3, 3, 0.5) 0%, rgba(247, 186, 31, 0.8) 100%)",
      color: "#fff",
    },
  }),
  noOptionsMessage: (styles) => ({
    ...styles,
    color: "#fc4734",
  }),
};

export const Icon = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  ${flex_center}
  height: 44px;
  width: 44px;
`;
