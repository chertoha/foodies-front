import styled from "styled-components";
import theme from "styles/theme";
import { flexBetween, pb, pt } from "styles/atomic";

export const Outer = styled("div")`
  ${pb(10)}
  border-bottom: 1px solid rgba(5, 5, 5, 0.1);
`;

export const Inner = styled("div")`
  ${flexBetween()}
`;

export const CopyrightWrapper = styled("div")`
  ${pt(10)}
  ${pb(4)}

  text-align: center;
  color: rgba(5, 5, 5, 0.6);

  ${theme.mq.tablet} {
    ${pb(8)}
  }

  ${theme.mq.desktop} {
    ${pb(18)}
  }
`;
