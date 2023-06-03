import { css, ThemeProvider } from "styled-components";

export const config = {
  colors: {
    red: "#fc4734",
    white: "#ffffff",
    gray: "#505050",
  },
  text: {
    overflow: css`
      text-overflow: ellipsis;
      overflow: hidden;
      width: 100%;
      white-space: nowrap;
    `,
    getLineClamp: (lines = 4) =>
      css`
        display: -webkit-box;
        -webkit-line-clamp: ${lines};
        -webkit-box-orient: vertical;
        overflow: hidden;
      `,
  },
  content: {
    image: css`
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    `,
    center: css`
      display: flex;
      justify-content: center;
      align-items: center;
    `,
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={config}>{children}</ThemeProvider>;
};

export default Theme;
