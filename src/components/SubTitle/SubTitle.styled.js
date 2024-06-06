import styled from "styled-components";
import { mb, body1 } from "styles/atomic";
import theme from "styles/theme";

export const Text = styled("p")`
  ${mb(8)};
  ${body1()};
  color: #050505cc;
  ${theme.mq.mobileOnly} {
  }

  ${theme.mq.tablet} {
    ${mb(10)};
  }

  ${theme.mq.desktop} {
  }
`;
