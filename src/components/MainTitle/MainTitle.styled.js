import styled from "styled-components";
import { heading2 } from "styles/atomic";
import theme from "styles/theme";

export const Title = styled("h1")`
  ${heading2()};
  color: ${theme.colors.accent};

  text-transform: uppercase;
  ${theme.mq.mobileOnly} {
  }

  ${theme.mq.tablet} {
  }

  ${theme.mq.desktop} {
  }
`;
