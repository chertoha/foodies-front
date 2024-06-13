import theme from "styles/theme";
import styled from "styled-components";

export const GridContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

// const gridTemplates = ["1fr 1fr 2fr", "1fr 2fr 1fr", "2fr 1fr 1fr"];
const gridTemplates = ["26% 26% 48%", "26% 48% 26%", "48% 26% 26%"];
const gridTemplatesTablet = ["1fr 1fr", "1fr"];

export const List = styled("div")`
  display: grid;
  row-gap: 20px;
`;

export const Row = styled("div")`
  display: grid;
  column-gap: 20px;
  row-gap: 20px;
  grid-template-columns: 1fr;
  ${theme.mq.tablet} {
    grid-template-columns: ${p => gridTemplatesTablet[p.$template]};
  }
  ${theme.mq.desktop} {
    grid-template-columns: ${p => gridTemplates[p.$template]};
  }
`;
