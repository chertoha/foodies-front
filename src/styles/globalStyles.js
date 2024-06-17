import theme from "./theme";

const { createGlobalStyle } = require("styled-components");

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html{ 
  scroll-behavior: smooth;
}

body {
  max-width: 100vw;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.medium};
  font-family: "Mulish", sans-serif;
  font-optical-sizing: auto;
  line-height: ${theme.lineHeights.normal};
  color: ${theme.colors.accent}
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
li {
  margin: 0;
  padding: 0;
}

input {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
}
`;

export default GlobalStyle;
