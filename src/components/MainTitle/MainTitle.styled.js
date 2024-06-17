import styled from "styled-components";
import theme from "styles/theme";
import { heading2 } from "styles/atomic";

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
