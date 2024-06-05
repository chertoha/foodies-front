import styled from "styled-components";
import { mb, heading2 } from "styles/atomic";
import theme from "styles/theme";

export const Title = styled("h1")`
  ${mb(4)};
  ${heading2()};
  color: ${theme.colors.accent};

  text-transform: uppercase;
  ${theme.mq.mobileOnly} {
  }

  ${theme.mq.tablet} {
    ${mb(5)};
  }

  ${theme.mq.desktop} {
  }
`;
