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

  @media screen and (min-width: 768px) {
    width: 443px;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -0.32px;
  }
`;
