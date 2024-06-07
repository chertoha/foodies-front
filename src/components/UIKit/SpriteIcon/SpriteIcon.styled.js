import styled from "styled-components";
import theme from "styles/theme";

export const Icon = styled("svg")`
  width: ${p => p.size[0]}px;
  height: ${p => p.size[0]}px;

  ${theme.mq.tablet} {
    width: ${p => p.size[1]}px;
    height: ${p => p.size[1]}px;
  }

  ${theme.mq.desktop} {
    width: ${p => p.size[2]}px;
    height: ${p => p.size[2]}px;
  }
`;
