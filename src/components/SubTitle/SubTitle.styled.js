import styled from "styled-components";
import { body1 } from "styles/atomic";
import theme from "styles/theme";

export const Text = styled("p")`
  ${body1()};
  color: #050505cc;
  ${theme.mq.mobileOnly} {
  }

  ${theme.mq.tablet} {
  }

  ${theme.mq.desktop} {
  }
`;
